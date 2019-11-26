
async function createNewUser() {
  const userInput = { username: "bob" , points: 20}
  return await API.graphql(graphqlOperation(createUser, { input: userInput }))
}

const MutationButton = document.getElementById('MutationEventButton');
const MutationResult = document.getElementById('MutationResult');

MutationButton.addEventListener('click', (evt) => {
  MutationResult.innerHTML = `MUTATION RESULTS:`;
  createNewUser().then( (evt) => {
    MutationResult.innerHTML += `<p>${evt.data.createUser.username} - ${evt.data.createUser.points}</p>`
  })
});


const QueryResult = document.getElementById('QueryResult');

async function getLeaders() {
  QueryResult.innerHTML = `QUERY RESULTS`;
  API.graphql(graphqlOperation(listUsers)).then((evt) => {
    evt.data.listUsers.items.map((user, i) => 
    QueryResult.innerHTML += `<p>${user.username} - ${user.points}</p>`
    );
  })
}
		
getLeaders();
