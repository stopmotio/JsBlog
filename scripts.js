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
    console.warn('Suspiciously long load time... Make sure you\'re using localhost!');
    document.getElementById('postdiv').innerHTML = "<p>FATAL ERROR! If you are testing code, remember to use <code>localhost</code> or else the HTTP(S) request will fail.</p> <p>If you are a user, this may occur when it is taking too long. If you think your connection just needs more time, wait a few seconds. If it still does not load, refresh the page, or try again later.</p>";
  } else if(reqcode !== 200) {
    console.warn("There is an error code of " + reqcode);
  } else {
    console.log('Error Catcher says smooth sailing!');
  }
}
