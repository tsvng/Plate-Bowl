/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateRestaurant = `subscription OnCreateRestaurant(
  $name: String
  $cuisine: String
  $region: String
  $imgurl: String
  $points: Int
) {
  onCreateRestaurant(
    name: $name
    cuisine: $cuisine
    region: $region
    imgurl: $imgurl
    points: $points
  ) {
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
export const onUpdateRestaurant = `subscription OnUpdateRestaurant(
  $name: String
  $cuisine: String
  $region: String
  $imgurl: String
  $points: Int
) {
  onUpdateRestaurant(
    name: $name
    cuisine: $cuisine
    region: $region
    imgurl: $imgurl
    points: $points
  ) {
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
export const onDeleteRestaurant = `subscription OnDeleteRestaurant(
  $name: String
  $cuisine: String
  $region: String
  $imgurl: String
  $points: Int
) {
  onDeleteRestaurant(
    name: $name
    cuisine: $cuisine
    region: $region
    imgurl: $imgurl
    points: $points
  ) {
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
export const onCreateRecipe = `subscription OnCreateRecipe(
  $name: String
  $cuisine: String
  $region: String
  $imgurl: String
  $points: Int
) {
  onCreateRecipe(
    name: $name
    cuisine: $cuisine
    region: $region
    imgurl: $imgurl
    points: $points
  ) {
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
export const onUpdateRecipe = `subscription OnUpdateRecipe(
  $name: String
  $cuisine: String
  $region: String
  $imgurl: String
  $points: Int
) {
  onUpdateRecipe(
    name: $name
    cuisine: $cuisine
    region: $region
    imgurl: $imgurl
    points: $points
  ) {
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
export const onDeleteRecipe = `subscription OnDeleteRecipe(
  $name: String
  $cuisine: String
  $region: String
  $imgurl: String
  $points: Int
) {
  onDeleteRecipe(
    name: $name
    cuisine: $cuisine
    region: $region
    imgurl: $imgurl
    points: $points
  ) {
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
export const onCreateUser = `subscription OnCreateUser(
  $username: String
  $points: Int
  $foodhistory: [String]
  $bucketlist: [String]
  $disinsterested: [String]
) {
  onCreateUser(
    username: $username
    points: $points
    foodhistory: $foodhistory
    bucketlist: $bucketlist
    disinsterested: $disinsterested
  ) {
    username
    points
    foodhistory
    bucketlist
    disinsterested
    recommendations
    friends
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser(
  $username: String
  $points: Int
  $foodhistory: [String]
  $bucketlist: [String]
  $disinsterested: [String]
) {
  onUpdateUser(
    username: $username
    points: $points
    foodhistory: $foodhistory
    bucketlist: $bucketlist
    disinsterested: $disinsterested
  ) {
    username
    points
    foodhistory
    bucketlist
    disinsterested
    recommendations
    friends
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser(
  $username: String
  $points: Int
  $foodhistory: [String]
  $bucketlist: [String]
  $disinsterested: [String]
) {
  onDeleteUser(
    username: $username
    points: $points
    foodhistory: $foodhistory
    bucketlist: $bucketlist
    disinsterested: $disinsterested
  ) {
    username
    points
    foodhistory
    bucketlist
    disinsterested
    recommendations
    friends
  }
}
`;
