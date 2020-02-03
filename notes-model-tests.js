// (function(exports) {
//   function testTextOnInstantiation() {
//     var note = new Note()

//     if (note.show !== 'first note') {
//       throw new Error("note does not exist");
//     }
//   };
  
//   testTextOnInstantiation();
// })(this);


function testTextInTextProperty() {
  var note = new Note();
  assert.isTrue(note.text === 'first note');
};

testTextInTextProperty();


function testShowTextProperty() {
  var note = new Note();
  note.text = 'abc'
  assert.isTrue(note.show() === 'abc');
};

testShowTextProperty();















