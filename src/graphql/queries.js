/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($username: String!) {
  getUser(username: $username) {
    username
    points
    foodlog {
      mainCuisine
      secondaryCuisine
      region
      restaurantName
    }
    friends {
      username
      points
    }
    bucketlist {
      mainCuisine
      secondaryCuisine
      region
      restaurantName
    }
    disinterested {
      mainCuisine
      secondaryCuisine
      region
      restaurantName
    }
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
    }
    nextToken
  }
}
`;
export const getFood = `query GetFood($mainCuisine: String!) {
  getFood(mainCuisine: $mainCuisine) {
    mainCuisine
    secondaryCuisine
    region
    restaurantName
  }
}
`;
export const listFoods = `query ListFoods(
  $filter: TableFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      mainCuisine
      secondaryCuisine
      region
      restaurantName
    }
    nextToken
  }
}
`;
export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: TableTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
