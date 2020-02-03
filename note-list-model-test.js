//import { Note } from "./notes-model";

function testCreateAndStore() {
  var noteList = new NoteList();
  noteList.createAndStore("content")
  assert.isTrue(noteList.list[0] instanceof Note);
};

testCreateAndStore();

function testShow() {
  var noteList = new NoteList();
  noteList.createAndStore("a note")
  assert.isTrue(noteList.show()[0].text === "a note");
};

testShow(); 