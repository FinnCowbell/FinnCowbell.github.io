var sidebar = document.getElementById("sidebar");
var frame = document.getElementById("frame");
var snakeB = document.getElementById("snakeB");
var scalingSnakeB = document.getElementById("scalingSnakeB");
var overlay = document.getElementById("overlay");
function openSidebar(link){
  overlay.style.display = "block";
  frame.src=link;
  var pos = 0;
  var run = setInterval(anim, 1);

  function setwidth(){ sidebar.style.width = 100 - parseInt(sidebar.style.left) + "%" }

  function anim() {
    if(pos >= Math.PI){
      clearInterval(run);
      frame.style.src=link;
      sidebar.style.left = ((parseInt(sidebar.style.left) / window.innerWidth)*100) +"%"
      setwidth();
    } else{
    sidebar.style.left = (
      window.innerWidth - (window.innerWidth / 1.5)*Math.sin(pos - (Math.PI / 2))
    );
    pos += Math.PI / 200;
    }
  }
}
function closeSidebar(){;
  overlay.style.display = "none";
  var pos = Math.PI / 2;
  var run = setInterval(anim, 1);
  function anim(){
    if(pos <= 0){
      console.log("cleared");
      clearInterval(run);
      sidebar.style.left = "100%";
      frame.style.src="";
    } else{
    sidebar.style.left =
    (window.innerWidth - (window.innerWidth / 1.5)*Math.sin(pos));

    pos -= Math.PI / 250;
    }
  }
}
snakeB.onclick = function(){openSidebar("https://finncowbell.github.io/snake/")};
scalingSnakeB.onclick = function(){openSidebar("https://finncowbell.github.io/scalingSnake")}
overlay.onclick = function(){closeSidebar();}
