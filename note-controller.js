(function(exports) {
  function NoteController() {
    this.noteListView = new NoteListView();
    this.ncNoteList = this.noteListView.noteList;
  };

  exports.NoteController = NoteController;
})(this);

NoteController.prototype.addNote = function(body) {
    this.ncNoteList.createAndStore(body)
}

NoteController.prototype.view = function() {
    return this.noteListView
}

NoteController.prototype.insertion = function(id, doc = document){
  var message = this.view().htmlString()
  var el = doc.getElementById(id);
  el.innerHTML = message;
}


var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };