(function(exports) {
  function testTextOnInstantiation() {
    var note = new Note()

    if (note.show !== 'first note') {
      throw new Error("note does not exist");
    }
  };
  
  testTextOnInstantiation();
})(this);