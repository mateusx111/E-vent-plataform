import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4px2yjl2txn01z40lxy1cv3/master',
  cache: new InMemoryCache()
})