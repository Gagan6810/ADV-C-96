username = localStorage.getItem('username');
roomname = localStorage.getItem('room_name_clicked');

function send(){
    msg = document.getElementById('msg').value;
    firebase.database().ref('roomname').push({
        username : username,
        message : msg,
        likes : 0
    });
    document.getElementById('msg').value = "";
}

