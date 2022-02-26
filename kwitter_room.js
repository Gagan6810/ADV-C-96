username = localStorage.getItem('username');

document.getElementById('welcome').innerHTML = "<h2> Welcome " + username + "!!!!! </h2>";

function addroom(){
    roomname = document.getElementById('roomname_input').value;
    localStorage.setItem('roomname', roomname);
    firebase.database().ref('/').child(roomname).update({
        Hello : 'My Name is Gagan'
    })
    localStorage.getItem('roomname', roomname);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log(Room_names);
row = "<div id= '" + Room_names + "' class = 'roomname' onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById('output').innerHTML += row;
});});}
getData();

function redirectToRoomname(room_name){
    console.log(room_name);
    localStorage.setItem('room_name_clicked', room_name);
    window.location = 'kwitter_page.html';
}

function logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('room_name_clicked');
    window.location = 'index.html';
}