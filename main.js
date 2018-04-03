var tests = 0;
function testClick(number){
  tests = tests + number;
  document.getElementById("tests").innerHTML = tests;
};
var firstgraders = 0;
function buyFirstgrader(){
    var firstgraderCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(tests >= firstgraderCost){                                   //checks that the player can afford the cursor
        firstgraders = firstgraders + 1;                                   //increases number of cursors
    	tests = tests - firstgradersCost;                          //removes the cookies spent
        document.getElementById('firstgraders').innerHTML = firstgraders;  //updates the number of cursors for the user
        document.getElementById('tests').innerHTML = tests;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('firstgraderCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	testClick(firstgraders);
	
}, 1000);
