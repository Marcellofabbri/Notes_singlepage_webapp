(function(exports) {
  function Note() {
    this.text = 'first note';
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

