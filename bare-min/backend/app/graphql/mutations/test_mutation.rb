module Mutations
  class TestMutation < BaseMutation
    # TODO: remove me
    field :test_field,
          String,
          null: false, description: "An example field added by the generator"
    def resolve
      { test_field: "Hello World" }
    end
  end
end
