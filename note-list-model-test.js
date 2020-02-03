function testNoteList() {
  var noteList = new NoteList();
  noteList.add('another')
  assert.isTrue(noteList.list.length === 2);
};

testNoteList();
