class Types::SubscriptionType < Types::BaseObject
  extend GraphQL::Subscriptions::SubscriptionRoot

  field :sub_test, subscription: Subscriptions::SubTest
end
