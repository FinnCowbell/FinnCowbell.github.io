var sidebar = document.getElementById("sidebar");
var frame = document.getElementById("frame");
var frameBlocker = document.getElementById('frameBlocker');
var cabbageB = document.getElementById('cabbageB');
var snakeB = document.getElementById("snake1");
var scalingSnakeB = document.getElementById("snake2");
var saucyB = document.getElementById('saucy');
var sovB = document.getElementById('sov');
var overlay = document.getElementById("overlay");
var exitB = document.getElementById("exitButton");
var handle = document.getElementById('handle');
var opening = false;
var css = document.getElementById('html').style;
let secretSound = document.getElementById('secretSound')
secretSound.volume = .25
secretCabbage.volume = .5
let Sauce = new Konami("38384040373937396665");
Sauce.activateFunction = function(){
  secretSound.play();
  openSidebar("https://finncowbell.github.io/saucy", .95)}
Sauce.run()

// let Cab = new Konami("67656666657169");
// Cab.activateFunction = function(){
//   secretCabbage.play();
//   openSidebar("https://finncowbell.github.io/Cannonball-Cabbage", .95)}
let openSidebar = function (link, alpha) {
  sidebar.style.animationName = "openSidebar";
  sidebar.style.display = 'block';
  sidebar.style.animationPlayState = "running";
  overlay.style.display = 'block';
  overlay.style.opacity = alpha;
  sidebar.style.animationDirection = 'normal';
  frame.src = link;
  opening = true;
}
// Cab.run()

function closeSidebar() {;
  sidebar.style.animationName = "openSidebar";
  sidebar.style.animationPlayState = "running";
  sidebar.style.animationDirection = 'reverse';
  exitB.style.display = 'none';
  opening = false;
}
sidebar.addEventListener("animationiteration", function() {
  //when the animation completes
  sidebar.style.animationPlayState = "paused";
  if (opening) {
    sidebar.style.left = 'var(--sidebar-location)'; /*
    Initial value is not the sidebar location, as it breaks it on safari.
    I set the sidebar to the variable after it animates once, and that fixes it.*/
    frame.focus();
    sidebar.style.animationName = "unset";
    exitB.style.display = 'block';
  } else {
    sidebar.style.animationName = "unset";
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
  }
}, false);
handle.onmousedown = function(event) {
  frameBlocker.style.display = 'block'; //'blocks' the mouse from focusing the iframe when dragging
  let newPercent = event.pageX / window.innerWidth * 100 + "%";
  document.onmousemove = function(event) {
    newPercent = event.pageX / window.innerWidth * 100 + "%";
    newPercent = parseInt(newPercent) > 90 ? '90%' : parseInt(newPercent) < 1 ? '1%' : newPercent;
    sidebar.style.left = newPercent;
  }
  document.onmouseup = function(event) {
    css.setProperty('--sidebar-location', (newPercent))
    frameBlocker.style.display = 'none';
    frame.focus();
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
snakeB.onclick = function() {
  openSidebar("https://finncowbell.github.io/snake/", .5)
};
scalingSnakeB.onclick = function() {
  openSidebar("https://finncowbell.github.io/scalingSnake", .5)
}
saucyB.onclick = function() {
  openSidebar("https://finncowbell.github.io/saucy", .95)
}
sovB.onclick = function(){
  openSidebar("https://finncowbell.github.io/spirographsOfVenus",.5)
}
overlay.onclick = function() {
  closeSidebar();
}
exitB.onclick = function() {
  closeSidebar();
}
cabbageB.onclick = function(){
  console.log("Acrivagted")
  secretCabbage.play();
  openSidebar("https://finncowbell.github.io/Cannonball-Cabbage", .95)
}
