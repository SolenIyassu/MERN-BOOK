import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String! $password: String!){
    addUser(username: $username, password: $password, email:$email)
    username: String!
    password: String!
    email: String!

}`;

export const SAVE_BOOK = gql`
mutation saveBook ($bookId: String!, $description: String, $image: String, $link: String, $authors: [String]! $title: String!){
saveBook(book: $book, bookId: $bookId, description:$description, image: $image, link:$String!){
username
email
bookcount
savedBooks{
    bookId
    authors
    description
    title
    image
    link
}

}} `;

export const ADD_LOGIN = gql`
mutation login ($email: String!, password: String! ){
login (email: $email, password: $password){
token
user {
    _id
    username
}
}
}`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId){
        username
        email
        bookCount
        savedBook{
            $bookId
            authors
            description
            title
            image
            link
        }
    }
  }
`;
