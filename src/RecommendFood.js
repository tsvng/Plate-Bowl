import React from 'react';
export default class RecommendFood extends React.Component{ 
    componentDidMount(){
      var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
      };

      function success(pos) {
          var crd = pos.coords;

          console.log('Your current position is:');
          console.log(`Latitude : ${crd.latitude}`);
          console.log(`Longitude: ${crd.longitude}`);
          console.log(`More or less ${crd.accuracy} meters.`);
          API_Request(`latitude=${crd.latitude}&longitude=${crd.longitude}`);

      }

      function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
          API_Request('location="Los Angeles, CA"')
      }
      navigator.geolocation.getCurrentPosition(success, error, options);

      function API_Request(loc){
        var NUM_RECS = 4;
        var request = new XMLHttpRequest()
        var query = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?'.concat(loc);

        request.open('GET', query, true)
        request.setRequestHeader('Authorization', 'Bearer GOwKiYf6YgplxeQAJWLN6kZ6oF56Su8hiZ9yv1fk4Zw6D-xFG0GGteQiwPWBw0Wa7glsFlfSyydsFSegpPSF3rb4dm0xe6IqKn0jrKHnsKAbQCWJvc0cjfArvQKlXXYx')
        request.onload = function() {
          // Begin accessing JSON data here
          var data = JSON.parse(this.response)
    
          if (request.status >= 200 && request.status < 400) {
              console.log(data.total);
              console.log(data.businesses.length);
              var recNum = new Array(NUM_RECS);
              var i =0;
              while(i<NUM_RECS){
                  var temp= Math.floor(Math.random()*data.businesses.length);
                  if(!recNum.includes(temp)){
                      recNum[i]=temp;
                      i = i+1;
                  }
    
              }
              document.getElementById("rec1").setAttribute('src',data.businesses[recNum[0]].image_url)
              document.getElementById("rec2").setAttribute('src',data.businesses[recNum[1]].image_url)
              document.getElementById('rec3').setAttribute('src',data.businesses[recNum[2]].image_url)
              document.getElementById('rec4').setAttribute('src',data.businesses[recNum[3]].image_url)
              document.getElementById("r1name").innerHTML = data.businesses[recNum[0]].name;
              document.getElementById("r2name").innerHTML = data.businesses[recNum[1]].name;
              document.getElementById('r3name').innerHTML = data.businesses[recNum[2]].name;
              document.getElementById('r4name').innerHTML = data.businesses[recNum[3]].name;
              console.log(data.businesses[0].image_url)
              console.log(data.businesses[0].name)
            /*data.forEach(movie => {
              console.log(movie.title)
            })*/
            console.log('ok')
          } else {
            console.log('error')
          }
        }
    
        request.send()
    }
  }   
	render(){
        const h1Style ={
            fontFamily: 'Optima', 
            fontSize: '20pt'
        }
		return (
			<div>
                <div id = "main">
                    <div id = "recommend" className="app">
                                          <div class = "nav">
      <div class = "nav-right">
        <a href="#home">Home</a>
        <a href="#leaderboard" >Leaderboard</a>
        <a href="#recommendFood">Recommendations</a>
        <a href="#foodHistory">History</a>
        <a href="#bucketList">Bucket List</a>
      </div>
      </div>
                        <div id = "login-page" className="app-header">
                            <h1>Explore Food</h1>
                            
                    <div id = "RecommendFood">
                        <h1 style = {h1Style}>Our Suggestions</h1>
                        <div id = "recommendPartition">
                            <div className="wrapper"><div className="text" id = "r1name"></div><img id = "rec1" className = "tile"></img></div>
                            <div className="wrapper"><div className="text" id = "r2name"></div><img id = "rec2" className = "tile"></img></div>
                            <div className="wrapper"><div className="text" id = "r3name"></div><img id = "rec3" className = "tile"></img></div>
                            <div className="wrapper"><div className="text" id = "r4name"></div><img id = "rec4" className = "tile"></img></div>
                        </div>
                        <div id = "Cuisine Search">
                        <h1 style = {h1Style}>Cuisine Search</h1>
                        </div>
                        </div>
                    </div>  
                    </div>
                </div>
			</div>
		);
	}
}