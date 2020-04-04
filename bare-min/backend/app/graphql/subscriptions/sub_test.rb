module Subscriptions
  class SubTest < Subscriptions::BaseSubscription
    field :results, Int, null: false
    def subscribe
      { results: Time.now.to_i }
    end
  end
end
