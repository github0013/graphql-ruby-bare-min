import { ApolloProvider } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { createUploadLink } from "apollo-upload-client"
import ActionCableLink from "graphql-ruby-client/dist/subscriptions/ActionCableLink"
import "isomorphic-fetch"
import React from "react"

interface Props {}
const Provider: React.FC<Props> = ({ children }) => {
  const [client, setClient] = React.useState(null)

  React.useEffect(() => {
    import("actioncable").then(ActionCable => {
      const uri = "/backend/graphql"
      const cableUrl = "/backend/cable"

      const cable = ActionCable.createConsumer(cableUrl)
      const httpLink = createUploadLink({
        uri,
        fetch,
        credentials: "include",
        fetchOptions: {
          credentials: "include",
        },
      })
      const hasSubscriptionOperation = ({ query: { definitions } }) => {
        return definitions.some(
          ({ kind, operation }) =>
            kind === "OperationDefinition" && operation === "subscription"
        )
      }
      const link = ApolloLink.split(
        hasSubscriptionOperation,
        new ActionCableLink({ cable }),
        httpLink
      )

      const wsClient = new ApolloClient({
        link,
        cache: new InMemoryCache(),
      })

      setClient(wsClient)
    })
  }, [])

  if (!client) {
    return null
  }
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
export default Provider
