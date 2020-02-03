(function(exports) {
  function NoteList() {
    this.list = ['string'];
  };

  NoteList.prototype.print = function(){
      this.list
  }

  NoteList.prototype.add = function(string){
    this.list.push(string)
  }

  exports.NoteList = NoteList;
})(this);


var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};