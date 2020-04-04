module Subscriptions
  class SubTest < GraphQL::Schema::Subscription
    field :results, Int, null: false
    def subscribe
      { results: Time.now.to_i }
    end
  end
end
