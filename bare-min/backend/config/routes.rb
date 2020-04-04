Rails.application.routes.draw do
  resource :backend, only: [] do
    mount ActionCable.server => "/cable"

    post "/graphql", to: "graphql#execute"
  end
end
