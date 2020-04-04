import { NoSsr } from "@material-ui/core"
import { AppProps } from "next/app"
import Head from "next/head"
import { Provider as ApolloDefaultProvider } from "../src/components/Apollo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <Head>
        <title> </title>
      </Head>
      <ApolloDefaultProvider>
        <Component {...pageProps} />
      </ApolloDefaultProvider>
    </NoSsr>
  )
}

export default MyApp
