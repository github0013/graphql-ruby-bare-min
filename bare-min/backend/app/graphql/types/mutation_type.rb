module Types
  class MutationType < Types::BaseObject
    field :test_mutation, mutation: Mutations::TestMutation
  end
end
