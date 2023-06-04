import { gql } from '@apollo/client';
export const GET_ARTICLES = gql`
  query Articles($skip: Int = 0, $first: Int) {
    articles(skip: $skip, first: $first, orderBy: createdAt_DESC) {
      id
      publishedAt
      createdAt
      content {
        html
      }
      thumbnails {
        url
      }
      slug
      title
      comments {
        id
      }
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
  }
`;

export const GET_ARTICLE_DETAIL = gql`
  query Article($slug: String!) {
    article(where: { slug: $slug }) {
      id
      slug
      title
      createdAt
      updatedAt
      content {
        html
      }
      thumbnails {
        url
      }
      tags(orderBy: name_ASC) {
        color {
          hex
        }
        name
        slug
      }
      comments {
        id
      }
    }
  }
`;

export const GET_ARTICLES_BY_TAG = gql`
  query Articles($slugTag: String!, $first: Int, $skip: Int = 0, $slugExist: String) {
    articles(
      where: { tags_some: { slug: $slugTag }, slug_not: $slugExist }
      orderBy: createdAt_DESC
      first: $first
      skip: $skip
    ) {
      title
      content {
        html
      }
      slug
      createdAt
      thumbnails {
        url
      }
      comments {
        id
      }
      tags(orderBy: name_ASC) {
        slug
        name
        color {
          hex
        }
      }
    }
  }
`;

export const SEARCH_ARTICLES = gql`
  query SearchArticles($key: String! = "", $first: Int, $skip: Int! = 0) {
    articles(where: { _search: $key }, orderBy: createdAt_DESC, first: $first, skip: $skip) {
      title
      content {
        html
      }
      slug
      createdAt
      thumbnails {
        url
      }
      comments {
        id
      }
      tags(orderBy: name_ASC) {
        slug
        name
        color {
          hex
        }
      }
    }
  }
`;

export const PUBLISH_ARTICLE = gql`
  mutation MyPublishComment($id: ID) {
    publishArticle(where: { id: $id }) {
      id
      comments {
        id
      }
    }
  }
`;
