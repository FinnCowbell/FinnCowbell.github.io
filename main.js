var sidebar = document.getElementById("sidebar");
var frame = document.getElementById("frame");
var snakeB = document.getElementById("snake1");
var scalingSnakeB = document.getElementById("snake2");
var saucyB = document.getElementById('saucy');
var overlay = document.getElementById("overlay");
var exitB = document.getElementById("exitButton");
var opening = false;
function openSidebar(link, alpha){
  sidebar.style.display = 'block';
  sidebar.style.animationPlayState = "running";
  overlay.style.display = 'block';
  overlay.style.opacity = alpha;
  sidebar.style.animationDirection = 'normal';
  frame.src=link;
  opening = true;
}
function closeSidebar(){;
  sidebar.style.animationPlayState = "running";
  sidebar.style.animationDirection = 'reverse';
  exitB.style.display = 'none';
  frame.style.src="";
  opening = false;
}
sidebar.addEventListener("animationiteration", function(){
  sidebar.style.animationPlayState = "paused";
  if(opening){
    sidebar.style.animationDirection = 'reverse';
    sidebar.style.left = '20%';
    exitB.style.display = 'block';
  } else{
    sidebar.style.display = 'none';
    sidebar.style.animationDirection = 'normal';
    sidebar.style.left = "100%";
    frame.style.src="";
    overlay.style.display = 'none';
}
},false);

snakeB.onclick = function(){openSidebar("https://finncowbell.github.io/snake/",.5)};
scalingSnakeB.onclick = function(){openSidebar("https://finncowbell.github.io/scalingSnake",.5)}
saucyB.onclick = function(){openSidebar("https://finncowbell.github.io/saucy",.95)}
overlay.onclick = function(){closeSidebar();}
exitB.onclick = function(){closeSidebar();}
