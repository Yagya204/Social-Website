var firebaseConfig = {
    apiKey: "AIzaSyAVtL1mErFOm8bmYCXPw2qmoN6Wigj4MQ8",
    authDomain: "kwitter-37085.firebaseapp.com",
    databaseURL: "https://kwitter-37085-default-rtdb.firebaseio.com",
    projectId: "kwitter-37085",
    storageBucket: "kwitter-37085.appspot.com",
    messagingSenderId: "240137955845",
    appId: "1:240137955845:web:171e53c223c8c566b5ca6c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}