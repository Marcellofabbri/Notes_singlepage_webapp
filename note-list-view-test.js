

function testInstantiatedWithANoteListModel() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.noteList instanceof NoteList);
};
testInstantiatedWithANoteListModel();


function testHtmlString() {
    var noteListView = new NoteListView();
    var noteListInstance = noteListView.noteList;
    noteListInstance.createAndStore("Note number one")
    noteListInstance.createAndStore("Note number two")
    assert.isTrue(noteListView.htmlString() == "<ul><li><div>Note number one</div></li><li><div>Note number two</div></li></ul>");
};
testHtmlString();