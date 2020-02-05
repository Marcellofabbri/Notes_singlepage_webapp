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
    //window.onload = function() {
    var document2 = document.implementation.createHTMLDocument('')
    var div = document2.createElement('div')
    div.id = "id"
    document2.body.append(div)
    nc.insertion("id", document2);
    assert.isTrue(div.innerHTML === '<ul><li><a href="#notes/0" id="0">Note number one</a></li><li><a href="#notes/1" id="1">Note number two</a></li></ul>')
    //window.stop();
    //};
}
testInsertion();