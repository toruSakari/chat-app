import { gql } from '@/apollo'

const QUERY_USER = gql`
  query QueryUser {
    user {
      name
    }
  }
`

export default QUERY_USER
