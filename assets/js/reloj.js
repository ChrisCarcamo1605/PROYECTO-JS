
let timeText = document.querySelector(".time__text")
setInterval(() => {

    let time = new Date();

    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    timeText.innerHTML = `${time.getHours()}:${minutes}:${time.getSeconds()}`;


}, 1000)