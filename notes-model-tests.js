// (function(exports) {
//   function testTextOnInstantiation() {
//     var note = new Note()

//     if (note.show !== 'first note') {
//       throw new Error("note does not exist");
//     }
//   };
  
//   testTextOnInstantiation();
// })(this);



function testTextOnInstantiation() {
  var note = new Note();
  assert.isTrue(note.show === 'first note');
};

testTextOnInstantiation();
