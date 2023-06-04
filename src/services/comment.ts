import { gql } from '@apollo/client';

export const POST_COMMENT = gql`
  mutation MyMutation($name: String!, $email: String!, $content: String!, $articleId: ID!) {
    createComment(
      data: { name: $name, email: $email, content: $content, article: { connect: { Article: { id: $articleId } } } }
    ) {
      id
    }
  }
`;
export const PUBLISH_COMMENT = gql`
  mutation MyPublishComment($id: ID) {
    publishComment(where: { id: $id }) {
      article {
        ... on Article {
          id
        }
      }
      id
    }
  }
`;
export const GET_COMMENTS = gql`
  query MyQuery($id: ID, $first: Int) {
    comments(where: { article: { Article: { id: $id } } }, first: $first, orderBy: publishedAt_DESC) {
      id
      email
      name
      content
      createdAt
    }
  }
`;

// replyForComment:{
//   id
//   content
//   name
//   email
//   createdAt
// }
