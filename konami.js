//There's no vanilla-js search array-in-array function! Strings it is.
let Konami = function(){
   this.sound =
   this.code = "3838404037393739666513";
   this.recorded = "";
   this.activateFunction = function(){console.log("activated")};
   this.run =function(){
    let konami = this
    document.addEventListener('keydown', function(k){
      konami.recorded += k.which
      if (konami.code == konami.recorded) {
        console.log("Konami activated!")
        konami.activateFunction();
        konami.recorded = "";
      }
      konami.recorded = konami.code.indexOf(konami.recorded) == 0 ? konami.recorded : ""
      //I dont want to make a keylogger. if the logging doesn't match the constant then fuggedaboutit
      console.log(konami.recorded)
    })}
  }
//  this.activated = partial(completed,param,.95);
//partials allow you to create functions with conditions
