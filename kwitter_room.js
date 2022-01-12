const firebaseConfig = {
    apiKey: "AIzaSyD-hhTQ990iDiB2baGkR_ScaCv-0oRCGT4",
    authDomain: "project-93-50f68.firebaseapp.com",
    databaseURL: "https://project-93-50f68-default-rtdb.firebaseio.com",
    projectId: "project-93-50f68",
    storageBucket: "project-93-50f68.appspot.com",
    messagingSenderId: "122636403305",
    appId: "1:122636403305:web:f676db23e631b7955318f8",
    measurementId: "G-72QTHXSH4S"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id'>#"+ Room_names +"</div></hr>";
    document.getElementById("output").innerHTML += row;

    
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_html";
}
