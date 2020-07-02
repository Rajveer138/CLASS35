class Form {
   constructor() {
     
   }
display() {
  var title = createElement("h2");
  title.html("Car Racing");
  title.position(130,0);
  var input = createInput("Name");
  var button = createButton("play");
  input.position(130,160);
  button.position(250,200);
  var greeting = createElement("h3");
button.mousePresssed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    player.update("name");
    playerCount = playerCount+1;
    player.updateCount(playerCount);
    greeting.html("hello"+name);
    greeting.position(120,160);
})
}


}
