function testSingleNoteViewInstantiation() {
    var snv = new SingleNoteView(note);
    assert.isTrue(snv.note instanceof Note)
};
testSingleNoteViewInstantiation();