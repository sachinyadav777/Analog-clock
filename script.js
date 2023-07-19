setInterval(() => {
    data = new Date()
    hours = data.getHours();
    minutes = data.getMinutes();
    seconds = data.getSeconds();
    document.querySelector(".hours").style.transform = `rotate(${30*hours+minutes/2}deg)`;
    document.querySelector(".minutes").style.transform = `rotate(${6*minutes}deg)`;
    document.querySelector(".second").style.transform = `rotate(${6*seconds}deg)`;
    
}, 1000);
