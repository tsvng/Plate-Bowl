/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = `query GetRestaurant($name: String!) {
  getRestaurant(name: $name) {
    name
    cuisine
    region
    imgurl
    points
    price
    location
  }
}
`;
export const listRestaurants = `query ListRestaurants(
  $filter: TableRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      cuisine
      region
      imgurl
      points
      price
      location
    }
    nextToken
  }
}
`;
export const queryRestaurantsByCuisineIndex = `query QueryRestaurantsByCuisineIndex(
  $cuisine: String!
  $first: Int
  $after: String
) {
  queryRestaurantsByCuisineIndex(
    cuisine: $cuisine
    first: $first
    after: $after
  ) {
    items {
      name
      cuisine
      region
      imgurl
      points
      price
      location
    }
    nextToken
  }
}
`;
export const getRecipe = `query GetRecipe($name: String!) {
  getRecipe(name: $name) {
    name
    cuisine
    region
    imgurl
    points
    time
    steps
  }
}
`;
export const listRecipes = `query ListRecipes(
  $filter: TableRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      cuisine
      region
      imgurl
      points
      time
      steps
    }
    nextToken
  }
}
`;
export const queryRecipesByCuisineIndex = `query QueryRecipesByCuisineIndex(
  $cuisine: String!
  $first: Int
  $after: String
) {
  queryRecipesByCuisineIndex(cuisine: $cuisine, first: $first, after: $after) {
    items {
      name
      cuisine
      region
      imgurl
      points
      time
      steps
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($username: String!) {
  getUser(username: $username) {
    username
    points
    foodhistory
    bucketlist
    recommendations
    following
    followers
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
      foodhistory
      bucketlist
      recommendations
      following
      followers
    }
    nextToken
  }
}
`;
