(function(exports) {
  function Note(body) {
    this.text = body;
  };

  Note.prototype.show = function(){
      return this.text
  }

  exports.Note = Note;
})(this);


var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

