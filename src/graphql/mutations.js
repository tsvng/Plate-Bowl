/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createFood = `mutation CreateFood($input: CreateFoodInput!) {
  createFood(input: $input) {
    mainCuisine
    secondaryCuisine
    region
    restaurantName
  }
}
`;
export const updateFood = `mutation UpdateFood($input: UpdateFoodInput!) {
  updateFood(input: $input) {
    mainCuisine
    secondaryCuisine
    region
    restaurantName
  }
}
`;
export const deleteFood = `mutation DeleteFood($input: DeleteFoodInput!) {
  deleteFood(input: $input) {
    mainCuisine
    secondaryCuisine
    region
    restaurantName
  }
}
`;
export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    id
    name
    description
  }
}
`;
