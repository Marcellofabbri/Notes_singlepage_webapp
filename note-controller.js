function NoteController() {
}

NoteController.prototype.greeting = function(message){
  var el = document.getElementById("app");
  el.innerHTML = message;
}