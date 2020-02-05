function testInstantiatedWithANoteListModel() {
    var noteListView = new NoteListView();
    assert.isTrue(noteListView.noteList instanceof NoteList);
};
testInstantiatedWithANoteListModel();


// function testHtmlString() {
//     var noteListView = new NoteListView();
//     var noteListInstance = noteListView.noteList;
//     noteListInstance.createAndStore("Note number one")
//     noteListInstance.createAndStore("Note number two")
//     assert.isTrue(noteListView.htmlString() == "<ul><li><div>Note number one</div></li><li><div>Note number two</div></li></ul>");
// };
// testHtmlString();

function testHtmlStringTwenty() {
    var noteListView = new NoteListView();
    var noteListInstance = noteListView.noteList;
    noteListInstance.createAndStore("twentycharactersonly---more stuff")
    noteListInstance.createAndStore("justcutoffaftertwent---remainder of the note")
    assert.isTrue(noteListView.htmlStringTwenty() == "<ul><li><a href='#notes/0' id='0'>twentycharactersonly</a></li><li><a href='#notes/1' id='1'>justcutoffaftertwent</a></li></ul>");
};
testHtmlStringTwenty();

// function testLinkUrl() {
//     var nc = new NoteController();
//     nc.addNote("Note number one")
//     nc.addNote("Note number two")
//     var document2 = document.implementation.createHTMLDocument('')
//     // var link1 = document2.createTextNode('Note 1')
//     // var a1 = document2.createElement('a')
//     // a1.href = "#notes/1"
//     // a1.id = "id1"
//     // var link2 = document2.createTextNode('Note 2')
//     // var a2 = document2.createElement('a')
//     // a2.href = "#notes/2"
//     // a2.id = "id2"
//     // document2.body.append(a1)
//     // document2.body.append(a2)
//     nc.insertion("id", document2);
//     assert.isTrue(div.innerHTML === "<ul><li><div href='#notes/1'>Note number one</div></li><li><div href='#notes/2'>Note number two</div></li></ul>")
//   }
//   testLinkUrl();

//   var a = document.createElement('a');
// var linkText = document.createTextNode("my title text");
// a.appendChild(linkText);
// a.title = "my title text";
// a.href = "http://example.com";
// document.body.appendChild(a);