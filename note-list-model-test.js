function testNoteList() {
  var noteList = new NoteList();
  noteList.add('another')
  assert.isTrue(noteList.list.length === 2);
};

testNoteList();

function testReturnNoteList() {
  var noteList = new NoteList();
  noteList.add('another')
  var b = ['string', 'another']
  var a = ['string', 'another']
  assert.isTrue(a == b);
};

testReturnNoteList();