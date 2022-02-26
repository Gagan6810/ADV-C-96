function user_login(){
    input_username = document.getElementById("username").value ;

    localStorage.setItem("username", input_username);

    window.location = 'kwitter_room.html';
}