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
  var message = this.view().htmlStringTwenty()
  var el = doc.getElementById(id);
  el.innerHTML = message;
}

// NoteController.prototype.loadContent = function(doc = document, "app", "div") {
//   window.addEventListener("hashchange", this.displayBodyOfNoteWhoseIdAppearsInUrl(doc = document, "app", "div"))
// }();
//instantiateASingleNoteView(getIdFromUrl())

// NoteController.prototype.displayBodyOfNoteWhoseIdAppearsInUrl = function(doc = document, elementId, elementTag) {
//   var urlId = getIdFromUrl()
//   var snv = new SingleNoteView(this.ncNoteList.list[urlId].text)
//   var el = doc.getElementById(elementId)
//   el.innerHTML = snv.render(elementTag)
// }
var nc = new NoteController();



var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };