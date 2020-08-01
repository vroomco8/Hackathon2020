firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.replace("index.html");
    document.getElementById("login.html").style.display = "none";
    // User is signed in.
  } else {
    // No user is signed in.
    document.getElementById("index.html").style.display = "none";
    document.getElementById("login.html").style.display = "block";
  }
});

function login(){

  var userEmail = document.getElementById("email-field").value;
  var userPass = document.getElementById("password-field").value;

  window.alert("hello");

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("error!" errorMessage);
  });

}
