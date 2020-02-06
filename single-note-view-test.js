function testSingleNoteViewInstantiation() {
    var snv = new SingleNoteView("the body of a note");
    assert.isTrue(snv.note instanceof Note)
    assert.isTrue(snv.note.text === "the body of a note")
};
testSingleNoteViewInstantiation();

function testRenderNote() {
    var snv = new SingleNoteView("the body of a note");
    // var document2 = document.implementation.createHTMLDocument('')
    // snv.render(document, "div")
    // element = document2.getElementsByTagName("div")[0]
    assert.isTrue(snv.render("div") === "<div>the body of a note</div>")
};
testRenderNote();