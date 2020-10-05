const express = require('express')
const path = require('path')
const socketio= require('socket.io')
const http = require('http')
const app = express(); //initialization of app object
//Create a server bia http
const server = http.createServer(app); 
const io = socketio(server); // inititate the variable io with server for connecion
app.use('/', express.static(path.join(__dirname, 'Quiz App Master'))); // we give a path for frontend
var firebase = require('firebase/app');
require('firebase/database');
require('firebase')
// var admin = require("firebase-admin");

// const newLocal = "path/to/serviceAccountKey.json";
// var serviceAccount = require(newLocal);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://quiz-c9d74.firebaseio.com"
// });

var firebaseConfig = {
    apiKey: "AIzaSyDMBZYjn_l76_pX6yirUKaHDnl0W2rYmdU",
    authDomain: "quiz-c9d74.firebaseapp.com",
    databaseURL: "https://quiz-c9d74.firebaseio.com",
    projectId: "quiz-c9d74",
    storageBucket: "quiz-c9d74.appspot.com",
    messagingSenderId: "748253623699",
    appId: "1:748253623699:web:091c71847b23e81dfbe466",
    measurementId: "G-GVQ3EEDV5T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const newLocal = firebase.database().ref('users/');
//For listening the client side 
io.on('connection',(socket)=>{
    console.log(" we got a forword from Client "+ socket.id)
    // var id =socket.id
    socket.on('Faculty_Ques', (questionArray)=>{        
        console.log("test",questionArray);
        var con = newLocal;
        con.push(questionArray)
        
        var ref = firebase.database().ref();


var ref = firebase.database().ref("users/");
// console.log(ref)

//getting the unique key 

// var ref = new firebase('https://quiz-c9d74.firebaseio.com');



//Updating the values of
// var userRef = ref.child("user").child("-MIq1NAVn7In35QjmP23").child('Answers');

// Ref.transaction(function(currentAnswer) {
//    return currentAnswer = Aayush;
// });

// playersRef.on("child_added", function(data, prevChildKey) {
//    console.log("Question: " + newQuestion.question);
//    console.log("option:1 " + newOption.option);
//    console.log("option2: " + newPlayer.option2);
//    console.log("CorrectAns: " + prevChildKey);
// });
        socket.broadcast.emit('msg',questionArray);     
     
        ref.on("value", function(snapshot) {
            console.log(snapshot.val());
         }, function (error) {
            console.log("Error: " + error.code);
         });
    });        
})
//server on the localhost
server.listen(4000,()=> console.log('Website hosted on port 4000'));