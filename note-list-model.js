(function(exports) {
  function NoteList() {
    this.list = [];
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.show = function() {
  return this.list
};

NoteList.prototype.createAndStore = function(body) {
  var note = new Note()
  note.text = body
  note.id = this.list.length
  this.list.push(note)
};


var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};