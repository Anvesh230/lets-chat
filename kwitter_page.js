var firebaseConfig = {
      apiKey: "AIzaSyAN1gcvcW3AXeq3VT17q-ZzOhq5ygq1PNM",
      authDomain: "kwitter-2ead7.firebaseapp.com",
      databaseURL: "https://kwitter-2ead7-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ead7",
      storageBucket: "kwitter-2ead7.appspot.com",
      messagingSenderId: "801340057719",
      appId: "1:801340057719:web:d5c7d80a976c027a777e72"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } }); 
 }); }
getData();



function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
      });

      document.getElementById("msg").value = "";
}