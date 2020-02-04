function testNoteControllerInstantiation() {
    var nc = new NoteController();
    assert.isTrue(nc.ncNoteList instanceof NoteList)
};
testNoteControllerInstantiation();

function testCreateAndAddNote() {
  var nc = new NoteController();
  nc.addNote("A1")
  assert.isTrue(nc.ncNoteList.list[0].text === "A1")
};
testCreateAndAddNote();



function testInsertion() {
  var nc = new NoteController();
  nc.addNote("Note number one")
  nc.addNote("Note number two")
    window.onload = function() {
    var document2 = document.implementation.createHTMLDocument('')
    var div = document2.createElement('div')
    div.id = "id"
    document2.body.append(div)
    nc.insertion("id");
    assert.isTrue(div.innerHTML === "<ul><li><div>Note number one</div></li><li><div>Note number two</div></li></ul>")
    };
    window.stop();
}
testInsertion();