import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      username
      email
      password
      bookcount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
