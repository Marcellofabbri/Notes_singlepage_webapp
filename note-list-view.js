(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList();
  };

  exports.NoteListView = NoteListView;
})(this);

// NoteListView.prototype.htmlString = function() {
//   var array = ["<ul>"]
//   for (i = 0; i < this.noteList.list.length; i++) {
//     array.push("<li><div>" + this.noteList.list[i].text + "</div></li>")
//   }
//   array.push("</ul>")
//   return array.join("");
// };

NoteListView.prototype.htmlStringTwenty = function() {
  var array = ["<ul>"]
  for (i = 0; i < this.noteList.list.length; i++) {
    array.push("<li><a href='#notes/" + i + "' id='" + i + "'>" + this.noteList.list[i].text.substring(0, 20) + "</a></li>")
  }
  array.push("</ul>")
  return array.join("");
};



var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};