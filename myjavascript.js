
var str = "", wins = 0, losses = 0, count, ans, str;

function init () {
  ans = Math.random().toString(16).substring(4,5);
  count = 10;
  str = "";
  // alert(ans);
}

function newGame () {
  init();
  document.getElementById("count").innerHTML = "10 (New Game)";
  document.getElementById("input").innerHTML = "";
}

init ();

document.onkeyup = function (x) {    
  k = x.key;
  str = str + " " + k;
  if (count <= 0) {
      alert("You Loser !! The answer is " + ans);    
      document.getElementById("losses").innerHTML = ++losses;
      newGame();
  } else {
    document.getElementById("input").innerHTML = str;
    document.getElementById("count").innerHTML = --count; 

    if (k === ans) {
       alert("You got it !!!");
       document.getElementById("wins").innerHTML = ++wins;
       str = "";  
       newGame();
    }
  }
}  
