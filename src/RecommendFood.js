import React from 'react';
export default class RecommendFood extends React.Component{ 
    componentDidMount(){
        var NUM_RECS = 4;
        var request = new XMLHttpRequest()
        request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="Los Angeles, CA"', true)
        //term="bagels"&
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
	render(){
        const h1Style ={
            fontFamily: 'Brush Script MT,Brush Script Std, cursive', 
            fontSize: '30pt'
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
                            <img id = "rec1" className = "tile"></img>
                            <img id = "rec2" className = "tile"></img>
                            <img id = "rec3" className = "tile"></img>
                            <img id = "rec4" className = "tile"></img>
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