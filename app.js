const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".key-checkbox input");
const keys = document.querySelector(".piano-keys span");

let allKeys = [], 
audio = new Audio("tunes/a1.wav");

const playTune = (key) =>{
    audio.src= `tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active"); 
    setTimeout(()=>{
        clickedkey.classList.remove("active"); 
    }, 150)
};

// const handleVolume = 

pianoKeys.forEach((key)=> {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    console.log(key.dataset.key);
});

audio.volume = 0.5;

volumeSlider.addEventListener("input", (e) =>{
    audio.volume = e.target.value;
});

keysCheckbox.addEventListener("click", (e)=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
})

document.addEventListener("keydown", (e)=>{
    if(allKeys.includes(e.key)) playTune(e.key);
});


