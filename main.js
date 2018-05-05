var sidebar = document.getElementById("sidebar");
var frame = document.getElementById("frame");
var snakeB = document.getElementById("snakeB");
var scalingSnakeB = document.getElementById("scalingSnakeB");
var overlay = document.getElementById("overlay");
var exitB = document.getElementById("exitButton");
function openSidebar(link){
  overlay.style.display = "block";
  frame.src=link;
  var pos = 0;
  var run = setInterval(anim, 2);
  function anim() {
    if(pos >= Math.PI){ // Alternatively, if(sidebar.style.left == 15%)
      clearInterval(run);
      frame.style.src=link;
      exitB.style.display = "block";
    } else{
    sidebar.style.left = ((15) +  85 * (Math.cos(pos) + 1)/2 + "%"); // Plug it into Desmos to see how it works.
    pos += Math.PI / 200;
    }
  }
}
function closeSidebar(){;
  overlay.style.display = "none";
  exitB.style.display = "none";
  var pos = 0;
  var run = setInterval(anim, 1);
  function anim(){
    frame.style.src="";
    if(pos >= Math.PI){
      console.log("cleared");
      clearInterval(run);
      sidebar.style.left = "100%";
      frame.style.src="";
    } else{
    sidebar.style.left = ((15) +  85 * (-Math.cos(pos) + 1)/2 + "%"); //The same function, but using -cos instead
      pos += Math.PI / 200;
    }
  }
}
snakeB.onclick = function(){openSidebar("https://finncowbell.github.io/snake/")};
scalingSnakeB.onclick = function(){openSidebar("https://finncowbell.github.io/scalingSnake")}
overlay.onclick = function(){closeSidebar();}
exitB.onclick = function(){closeSidebar();}
