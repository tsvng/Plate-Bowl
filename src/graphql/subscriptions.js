/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser(
  $username: String
  $points: Int
  $foodlog: [String]
  $friends: [String]
  $bucketlist: [String]
) {
  onCreateUser(
    username: $username
    points: $points
    foodlog: $foodlog
    friends: $friends
    bucketlist: $bucketlist
  ) {
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
export const onUpdateUser = `subscription OnUpdateUser(
  $username: String
  $points: Int
  $foodlog: [String]
  $friends: [String]
  $bucketlist: [String]
) {
  onUpdateUser(
    username: $username
    points: $points
    foodlog: $foodlog
    friends: $friends
    bucketlist: $bucketlist
  ) {
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
export const onDeleteUser = `subscription OnDeleteUser(
  $username: String
  $points: Int
  $foodlog: [String]
  $friends: [String]
  $bucketlist: [String]
) {
  onDeleteUser(
    username: $username
    points: $points
    foodlog: $foodlog
    friends: $friends
    bucketlist: $bucketlist
  ) {
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
export const onCreateFood = `subscription OnCreateFood(
  $mainCuisine: String
  $secondaryCuisine: [String]
  $region: [String]
  $restaurantName: String
) {
  onCreateFood(
    mainCuisine: $mainCuisine
    secondaryCuisine: $secondaryCuisine
    region: $region
    restaurantName: $restaurantName
  ) {
    mainCuisine
    secondaryCuisine
    region
    restaurantName
  }
}
`;
export const onUpdateFood = `subscription OnUpdateFood(
  $mainCuisine: String
  $secondaryCuisine: [String]
  $region: [String]
  $restaurantName: String
) {
  onUpdateFood(
    mainCuisine: $mainCuisine
    secondaryCuisine: $secondaryCuisine
    region: $region
    restaurantName: $restaurantName
  ) {
    mainCuisine
    secondaryCuisine
    region
    restaurantName
  }
}
`;
export const onDeleteFood = `subscription OnDeleteFood(
  $mainCuisine: String
  $secondaryCuisine: [String]
  $region: [String]
  $restaurantName: String
) {
  onDeleteFood(
    mainCuisine: $mainCuisine
    secondaryCuisine: $secondaryCuisine
    region: $region
    restaurantName: $restaurantName
  ) {
    mainCuisine
    secondaryCuisine
    region
    restaurantName
  }
}
`;
export const onCreateTodo = `subscription OnCreateTodo($id: ID, $name: String, $description: String) {
  onCreateTodo(id: $id, name: $name, description: $description) {
    id
    name
    description
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo($id: ID, $name: String, $description: String) {
  onUpdateTodo(id: $id, name: $name, description: $description) {
    id
    name
    description
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo($id: ID, $name: String, $description: String) {
  onDeleteTodo(id: $id, name: $name, description: $description) {
    id
    name
    description
  }
}
`;
