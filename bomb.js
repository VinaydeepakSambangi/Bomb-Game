let defuser = document.getElementById("defuser")
let timer = document.getElementById("timer")
let bombImgEl = document.getElementById("bombImg")
let bgEl = document.getElementById("bg")



let countdown = 10;
let uniqueId = setInterval(function() {
    countdown = countdown - 1
    timer.textContent = countdown
    if (countdown === 0) {
        timer.textContent = "BOOM"
        bgEl.style.backgroundColor = ("red");
        bombImgEl.src = "https://res.cloudinary.com/drmyiqroo/image/upload/v1706764990/bomb_mbgkix.jpg";
        clearInterval(uniqueId)
    }
}, 1000)


defuser.addEventListener("keydown", function(event) {
    if ((defuser.value === "defuse") && (event.key === "Enter") && (countdown !== 0)) {
        timer.textContent = "You Did It!"
        bgEl.style.backgroundColor = "green";
        bombImgEl.src = "https://res.cloudinary.com/drmyiqroo/image/upload/v1706765239/OIP_kkw80a.jpg";
        clearInterval(uniqueId)
    }
})