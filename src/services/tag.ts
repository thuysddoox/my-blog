import { gql } from '@apollo/client';
export const GET_TAGS = gql`
  query Tags {
    tags(orderBy: name_ASC) {
      id
      name
      slug
      createdAt
      color {
        hex
      }
    }
  }
`;

export const GET_TAG_DETAIL = gql`
  query ($slug: String!) {
    tag(where: { slug: $slug }) {
      name
      summary
      slug
      color {
        hex
      }
      articles(orderBy: createdAt_DESC) {
        id
        slug
        title
        createdAt
        content {
          html
        }
        thumbnails {
          url
        }
        comments {
          id
        }
      }
    }
  }
`;
