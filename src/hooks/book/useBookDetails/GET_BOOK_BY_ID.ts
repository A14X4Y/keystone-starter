import { gql } from '@apollo/client'

export const GET_BOOK_BY_ID = gql`
  query Book($where: BookWhereUniqueInput!) {
    book(where: $where) {
      title
      id
      averageRating
      reviewsCount
      reviews {
        content
        rating
        id
        user {
          email
          name
        }
      }
    }
  }
`