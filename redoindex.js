
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBPzvxhvl5cGBfxkTTvHkcJ2sqMB5LIyOU",
    authDomain: "byte-hacks-hackathon-2020.firebaseapp.com",
    databaseURL: "https://byte-hacks-hackathon-2020.firebaseio.com",
    projectId: "byte-hacks-hackathon-2020",
    storageBucket: "byte-hacks-hackathon-2020.appspot.com",
    messagingSenderId: "390174809584",
    appId: "1:390174809584:web:d4a5f4c5735d5afca71135"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up");

 }



 function signIn(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);

  promise.catch(e => alert(e.message));

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });




 }

 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("website").style.display = "initial";
    document.getElementById("formContainer").style.display = "initial";
    document.getElementById("fancyTitle").style.display = "none";
    document.getElementById("nav-bar").style.display = "initial";
    // User is signed in.
  } else {
    document.getElementById("website").style.display = "none";
    document.getElementById("formContainer").style.display = "initial";
    document.getElementById("fancyTitle").style.display = "initial";
    document.getElementById("nav-bar").style.display = "none";
    document.getElementById("website").style.display = "initial";
    // No user is signed in.
  }
});


function signOut(){

 auth.signOut();
 alert("Signed Out");
 document.getElementById("website").style.display = "none";
 document.getElementById("formContainer").style.display = "initial";

}



 auth.onAuthStateChanged(function(user){

  if(user){

   var email = user.email;
   alert("Active User " + email);

   //Take user to a different or home page

   //is signed in

  }else{

   alert("No Active User");

   //no user is signed in
  }



 });
