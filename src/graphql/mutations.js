/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = `mutation CreateRestaurant($input: CreateRestaurantInput!) {
  createRestaurant(input: $input) {
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
export const updateRestaurant = `mutation UpdateRestaurant($input: UpdateRestaurantInput!) {
  updateRestaurant(input: $input) {
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
export const deleteRestaurant = `mutation DeleteRestaurant($input: DeleteRestaurantInput!) {
  deleteRestaurant(input: $input) {
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
export const createRecipe = `mutation CreateRecipe($input: CreateRecipeInput!) {
  createRecipe(input: $input) {
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
export const updateRecipe = `mutation UpdateRecipe($input: UpdateRecipeInput!) {
  updateRecipe(input: $input) {
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
export const deleteRecipe = `mutation DeleteRecipe($input: DeleteRecipeInput!) {
  deleteRecipe(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    username
    points
    foodhistory
    bucketlist
    disinsterested
    recommendations
    following
    followers
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    username
    points
    foodhistory
    bucketlist
    disinsterested
    recommendations
    following
    followers
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    username
    points
    foodhistory
    bucketlist
    disinsterested
    recommendations
    following
    followers
  }
}
`;
