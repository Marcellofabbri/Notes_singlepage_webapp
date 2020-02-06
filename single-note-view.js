(function(exports) {
    function SingleNoteView(body) {
      this.note = new Note(body);
    };
  
    exports.SingleNoteView = SingleNoteView;
  })(this);

SingleNoteView.prototype.render = function(element = "div") {
  //el = doc.getElementById(element)
  //el.innerText = this.note.text
  //doc.body.append(el)
  return "<" + element + ">" + this.note.text + "</" + element + ">"
}


var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };