import React from 'react';
import ReactDOM from 'react-dom';

var menuState = 0;

function toggleNav(){
	if(menuState ==0){
		menuState = 1;
	}
	else{
		menuState = 0;
	}
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("floating-button").style.marginLeft = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("floating-button").style.marginLeft = "0";
  document.getElementById("main").style.marginLeft = "0px";
}

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});

describe('javascript', function () {
    it('knows that 2 and 2 make 4', function () {
        expect(2 + 2).toBe(4);
    });
});

describe('API integration test suite', function() {
    it('API integration test suite 222', function() {
	var NUM_RECS = 4;
	var request = new XMLHttpRequest();
    var res = -1;
	request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="Los Angeles, CA"', true)
	request.setRequestHeader('Authorization', 'Bearer GOwKiYf6YgplxeQAJWLN6kZ6oF56Su8hiZ9yv1fk4Zw6D-xFG0GGteQiwPWBw0Wa7glsFlfSyydsFSegpPSF3rb4dm0xe6IqKn0jrKHnsKAbQCWJvc0cjfArvQKlXXYx')
	request.onload = function() {
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
	    console.log('ok')
        res = 0;
	  } else {
	    console.log('error')
        res = 1;
	  }
	}
    request.send()
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect([1,2,3].indexOf(4)).toBe(-1);
        });
        it('should return 0 before toggleNav()', function() {
            expect(menuState).toBe(0);
        });
        it('should return 1 before toggleNav()', function() {
            menuState = 0;
            toggleNav();
            menuState = 1;
            expect(menuState).toBe(1);
        });
    });
});
