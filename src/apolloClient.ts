import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})

export default client
