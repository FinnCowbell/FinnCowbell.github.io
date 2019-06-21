let main = function(){
  let finn = document.getElementById('finn')

  let Thomaser = function(){

    finn.addEventListener("animationiteration",function(){
        finn.innerHTML = "Thomas"

    },false)
    document.title = "ThomasNav.in"
    finn.style.animationPlayState = "running"
  }

  let konami = new Konami() //The konami Code by Default
  konami.activateFunction = Thomaser
  konami.run()
}
window.onload = main
