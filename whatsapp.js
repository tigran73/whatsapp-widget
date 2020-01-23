let btn = document.getElementById('whatsapp-btn');
let chat = document.getElementById('chat-container');
let placeTime = document.getElementById("time");

function toggle_chat(){
    chat.classList.toggle('active');
    placeTime.innerHTML = getFormatedTime();
}

function getFormatedTime() {
    let date = new Date;
    let curHours = date.getHours();
    let totalHours = curHours < 10 ? '0' + curHours : curHours;
    let curMinute =	date.getMinutes();
    let totalMinute = curMinute < 10 ? '0' + curMinute : curMinute;
    return totalHours + ':' + totalMinute;
}