// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBC6grkVUGgDmdaH-slsYL7z_6H_9nkZbk",
    authDomain: "atm1504.firebaseapp.com",
    databaseURL: "https://atm1504.firebaseio.com",
    projectId: "atm1504",
    storageBucket: "atm1504.appspot.com",
    messagingSenderId: "252845060198",
    appId: "1:252845060198:web:5f6ccc43c73d7a7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference message collection
  var messageRef=firebase.database().ref('SendMessage');

document.getElementById('messageForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

//Get values
var first_name= getInputVal('first_name')
var last_name= getInputVal('last_name')
var email= getInputVal('email')
var message= getInputVal('message')

//Save Message
saveMessage(first_name,last_name,email,message);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3seconds
setTimeout(function(){
    document.querySelector('.alert').style.display='none';
},3000);

document.getElementById('messageForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save form to firebase
function saveMessage(first_name, last_name,email,message){
    var  newMessageRef=messageRef.push();
    newMessageRef.set({
        first_name: first_name,
        last_name: last_name,
        email: email,
        message: message
    });
}