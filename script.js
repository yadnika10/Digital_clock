const hrs = document.getElementById("hours");
const min = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function digiClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if( h > 12){
        h = h - 12;
        ampm = "PM";
    }

    if(h < 10){
       h = "0" + h;
    }
    if(m < 10){
       m = "0" + m;
    }
    if(s < 10){
       s = "0" + s;
    }

    hrs.innerText = h;
    min.innerText = m;
    second.innerText = s;
    ampm.innerText = ampm;

    setTimeout(()=>{
        digiClock();
    },1000);
}
digiClock();

//Dynamic BackGround:
function setBackground(){
    const currentHrs = new Date().getHours();
    console.log(currentHrs);

    if(currentHrs >= 6 && currentHrs < 18){
        document.getElementById('backgroundImage').src = 'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg';
    }else{
        document.getElementById('backgroundImage').src = 'https://storage.googleapis.com/pai-images/69fdcb0841764e938679f4dc5c08e84c.jpeg'
    }
}
setBackground();
setInterval(setBackground, 60000);

//Greeting:
function greet(){
    const currentHrs = new Date().getHours();

    if (currentHrs >= 5 && currentHrs < 12) {
        greeting = 'Life is a miracle and every breath we take is a gift Good morning';
    } 
    else if (currentHrs >= 12 && currentHrs < 18) {
        greeting = 'Never stop believing in hope because miracles happen every day. Good afternoon';
    } 
    else {
        greeting = 'Every sunset brings with it the promise of a new dawn. Good evening';
    }
    document.getElementById('greetingText').innerText = greeting;
}
greet();

//Time Zones Clock:
function timezones(){
    let time_zone = document.getElementById("timezone");
    let zone_value = time_zone.value;
    console.log(zone_value);

    let time_us = new Date().toLocaleString("en-US",{timeZone: zone_value ,timeStyle: "medium"});

    let viewTime = document.getElementById("view-time");
    viewTime.innerText = time_us;
}
timezones();
setInterval(timezones,1000);


  