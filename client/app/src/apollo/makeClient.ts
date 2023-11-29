import { ApolloLink, HttpLink } from "@apollo/client"
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr"
import { GRAPHQL_END_POINT } from '@/config'
import { isBrowser } from '@/utils'

export function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_END_POINT,
    fetchOptions: { cache: "no-store" },
  });

  const delayLink = new ApolloLink((operation, forward) => {

    return forward(operation);
  });
  const link =
    !isBrowser
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: false,
          }),
          httpLink,
        ])
      : httpLink;

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link,
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
        fetchPolicy: 'cache-and-network'
      },
      mutate: {
        errorPolicy: 'all',
        fetchPolicy: 'network-only'
      },
      query: {
        errorPolicy: 'all',
        fetchPolicy: 'network-only'
      }
    }
  });
}
