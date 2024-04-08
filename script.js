const fightSong = new Audio("UConn_Trim.m4a");

function playSong(){
    fightSong.play();
}

function pauseSong(){
    fightSong.pause();
}

function toggleMode(element){
    console.log(element.checked)
    var body = document.getElementById("body")
    var logo = document.getElementById("logo")
    var ncaa = document.getElementById("ncaa")
    var play = document.getElementById("play")
    var pause = document.getElementById("pause")

    if(element.checked){
        body.className = "light"
        play.className = "dark"
        pause.className = "dark"
        logo.src="images/husky-logo-original.png"
        ncaa.src="images/1999-logo.png"

    }else{
        body.className = "dark"
        play.className = "light"
        pause.className = "light"
        logo.src="images/husky-logo.jpeg"
        ncaa.src="images/2023-logo.png"
    }

}
