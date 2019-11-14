/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($username: String!) {
  getUser(username: $username) {
    username
    points
    id
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: TableUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      username
      points
      id
    }
    nextToken
  }
}
`;
