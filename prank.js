let noCount = 0;

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const question = document.getElementById("question");

noBtn.addEventListener("click", () => {
    noCount++;

    if (noCount === 1) {
        message.innerText = "Ek baar aur soch lo 😢";
    }
    else {
        const x = Math.random() * 600 - 300;
        const y = Math.random() * 600 - 300;

        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }
});

const video = document.getElementById("rikku2");

yesBtn.addEventListener("click", () => {
    question.innerText = "Congratulations ❤️🎉";
    question.classList.add("celebrate");
    message.innerText = "Tumne YES bol hi diya 😍";

    if (video) {
        const newVideo = document.createElement("video");
        newVideo.src = "rikku3.mp4";
        newVideo.className = "gif";
        newVideo.autoplay = true;
        newVideo.loop = true;
        newVideo.muted = true;
        video.parentNode.replaceChild(newVideo, video);
    }
});
