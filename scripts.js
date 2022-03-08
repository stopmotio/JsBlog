//Error catching vars
var hasRequestCompleted = false;
var reqcode;
// How long to wait to check status(give it enough time to complete the request!)
const errWaitTime = 1000;

function loadPost(what) {
  const xhttp = new XMLHttpRequest();
  var postdiv = document.getElementById('postdiv');
  xhttp.onload = function() {
    console.log("CODE: " + xhttp.status);
    reqcode = xhttp.status;
    console.log(this.responseText);
    postdiv.innerHTML = this.responseText;
    document.title = what.replace('posts/','').replace('.html','');
    hasRequestCompleted = true;
    }
  xhttp.open("GET", what, true);
  xhttp.send();
  setTimeout(CatchErr, errWaitTime);
}

function manualLoad() {
  loadPost(prompt("Enter filename","posts/samplepost.html"));
}

function CatchErr() {
  var postdivInner = document.getElementById('postdiv').innerHTML;
  if (hasRequestCompleted == false) {
    // In the 1 second given, XMLHttpRequest did not resolve.
    console.warn('serious bullshit is afoot');
    document.getElementById('postdiv').innerHTML = "<p>FATAL ERROR! If you are testing code, remember to use <code>localhost</code> or else the HTTP(S) request will fail.</p>";
  } else if(reqcode !== 200) {
    console.warn("There is an error code of " + reqcode);
  } else {
    console.log('Error Catcher says smooth sailing!');
  }
}
