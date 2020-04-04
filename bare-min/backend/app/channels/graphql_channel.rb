class GraphqlChannel < ApplicationCable::Channel
  def subscribed
    @subscription_ids = []
  end

  def unsubscribed
    @subscription_ids.each { |sid| AppSchema.subscriptions.delete_subscription(sid) }
  end

  def execute(data)
    data = data.with_indifferent_access
    query = data[:query]
    variables = ensure_hash(data[:variables])
    operation_name = data[:operationName]

    context = { channel: self, session: session }

    result =
      AppSchema.execute(
        {
          query: query,
          context: context,
          variables: variables,
          operation_name: operation_name
        }
      )
    payload = { result: result.to_h, more: result.subscription? }

    # Track the subscription here so we can remove it
    # on unsubscribe.
    @subscription_ids << context[:subscription_id] if result.context[:subscription_id]

    transmit(payload)
  end

  private

  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      ambiguous_param.present? ? ensure_hash(JSON.parse(ambiguous_param)) : {}
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def session
    connection.send(:cookies).encrypted["_session_id"]&.with_indifferent_access
  end
end
