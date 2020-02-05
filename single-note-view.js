(function(exports) {
    function SingleNoteView(body) {
      this.note = new Note(body);
    };
  
    exports.SingleNoteView = SingleNoteView;
  })(this);

SingleNoteView.prototype.render = function(doc = document, element = "div") {
  el = doc.createElement(element)
  el.innerText = this.note.text
  doc.body.append(el)
}


var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  };