
function testNoteControllerInstantiation() {
    var nc = new NoteController()
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
    var document3 = document.implementation.createHTMLDocument('')
    var div = document3.createElement('div')
    div.id = "id"
    document3.body.append(div)
    nc.insertion("id", document3);
    assert.isTrue(div.innerHTML === '<ul><li><a href="#notes/0" id="0">Note number one</a></li><li><a href="#notes/1" id="1">Note number two</a></li></ul>')
    //window.stop();
    //};
}
testInsertion();

function testLoadContent() {
  var nc = new NoteController();
  nc.addNote("Twentycharactersonlythisportionshouldnotbedisplayed")
  nc.addNote("Note number two")
  // var document2 = document.implementation.createHTMLDocument('')
  // var div = document2.createElement('div')
  // div.id = "id"
  // document2.body.append(div)
  var message = nc.view().htmlStringTwenty()
  console.log(document.getElementById("app"))
  var el = document.getElementById("app");
  el.innerHTML = message
  var event = new Event('hashchange');
// Listen for the event.
  //window.addEventListener('hashchange', enforceRenderMethod, false);
// Dispatch the event.
  //window.dispatchEvent(event);
  showNoteOnPage();
  document.getElementById("1").click()
  assert.isTrue(window.location.href == "http://localhost:8080/#notes/0")
  assert.isTrue(div.innerHTML === '<div id="app"><div>Twentycharactersonlythisportionshouldnotbedisplayed</div></div>')
  //when a new div is created it doesn't supersede the original div, it gets nested in the original
}
testLoadContent;

function testTypeUpANote() {
  dummyDocument()
  document2.getElementById('textarea') 
  document2.getElementById('textarea').value = "the content"
  document2.getElementById('submission').click()
  
}
testTypeUpANote




function simulateClick(document = document) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var a = document.getElementById("0"); 
  a.dispatchEvent(evt);      
}

function enforceRenderMethodMock() {
  var urlId = location.hash.split('#notes/')[1]
  var body = nc.view().noteList.list[urlId].text
  var snv = new SingleNoteView(body)
  var el = document2.getElementById("app")
  el.innerHTML = snv.render();
}

function dummyDocument() {
  var nc = new NoteController()
  var document2 = document.implementation.createHTMLDocument()
  var div = document2.createElement('div')
  div.id = "app"
  document2.body.append(div)
  var form = document2.createElement('form')
  form.id = "form"
  document2.body.append(form)
  var input = document2.createElement('input')
  input.setAttribute("type", "text")
  input.id = "textarea"
  document2.getElementById('form').append(input)
  var submit = document2.createElement('input')
  submit.setAttribute("type", "submit")
  submit.id = "submission"
  document2.getElementById('form').append(submit)
}