/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    following
    followers
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
    following
    followers
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
    following
    followers
  }
}
`;
