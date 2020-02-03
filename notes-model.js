(function(exports) {
  function Note() {
    this.show = 'first note';
  };

  exports.Note = Note;
})(this);


var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

