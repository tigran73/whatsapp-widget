let btn = document.getElementById('whatsapp-btn');
let chat = document.getElementById('chat-container');
let placeTime = document.getElementById('time');
let phoneLink = document.getElementById('whatsapp-link');
let phone = '99362920755'

window.onload = function(){
    generateLink(phone);
}

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

function generateLink(p) {
    let link = 'https://api.whatsapp.com/send?phone=' + phone;
    phoneLink.setAttribute('href', link)
}