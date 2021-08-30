const body = document.querySelector("body");
const musicBg = document.querySelector(".music-bg");
const playBtn = document.querySelector("#play");
const imgContainer = document.querySelector(".img-container");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const audio = document.querySelector("#audio");
const Songprogress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const songTitle = document.querySelector("#title");
const Artist = document.querySelector("#artist");
const songCover = document.querySelector("#cover");
const repeatSong = document.querySelector("#repeat");
const favourite = document.querySelector("#fav");
let seek_slider = document.querySelector(".seek_slider");

// songlist
let songs = [
  {
    name: "Know your worth ",
    artist: "Khalid ",
    image: "/img/khalid.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1csjZOL_8-DKLlGFWb9ef_9nwADuD8osY",
  },
  {
    name: "scars to beautiful ",
    artist: "Alessia Cara",
    image: "/img/scars to beautiful.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1d0QR7FNRYgmwKCE8sDuneKREkw4Y43py",
  },
  {
    name: "Exile",
    artist: "Taylor Swift, Bon Iver",
    image: "/img/exile.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1sJhT3tkSMyPq2X52y31LQcrfUt6YEVJn",
  },
  {
    name: "Watermelon Sugar",
    artist: "Harry Styles",
    image: "/img/water.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1RmJITbNeLTbCphz5pNBk43iwXGIX8mH0",
  },
  {
    name: "New Rules",
    artist: "Dua lipa",
    image: "/img/new rules.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1L-YARC0j8OGddW-F20WKSTl-r6l0jU5N",
  },
  {
    name: "Happier",
    artist: "Marshmello",
    image: "/img/happier.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1vMsR20Cy64eOmSM9jSfEXr8GfU7OgLsM",
  },
  {
    name: "Love Riddim ",
    artist: "Rotimi",
    image: "/img/rotimi.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1RhqaANH9G4xG0i9zeeoTGSpuxeugBevm",
  },
  {
    name: "Ride it",
    artist: "Jay Sean",
    image: "/img/ride it.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1-QBtImzP4-lSbRctdsLhsGvVFbgeXQs0",
  },
  {
    name: "Break my heart",
    artist: "Dua lipa",
    image: "/img/break my heart.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1G9CGJZg1se-fD3aalvtocXIcE8VBYGaT",
  },
  {
    name: "OTW",
    artist: "Khalid",
    image: "/img/otw.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1DonGceTl2_wDI1gTfZRp8elO9M48XnQF",
  },
  {
    name: "Freaking me out",
    artist: "Ava Max",
    image: "/img/freaking.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1oYKJ6SCxUx7VsiSf6oRsykkxOG6l82Hq",
  },
  {
    name: "let her go",
    artist: "Passenger",
    image: "/img/let her go.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1YFyiFyZbOOjm6z4r1vrrVeEIQhzznIMB",
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    image: "/img/blinding lights.jpg",
    path:
      "https://docs.google.com/uc?export=download&id=1voDWMN7o-gJPZ0PLBqOfluGnqjknl-5D",
  },
];

let songIndex = 0;

// initail load song
loadSong(songs[songIndex]);

// update song details
function loadSong(song) {
  songTitle.innerText = songs[songIndex].name;
  audio.src = songs[songIndex].path;
  songCover.src = songs[songIndex].image;
  Artist.innerText = songs[songIndex].artist;
}

// to play song
function playSong() {
  musicBg.classList.add("play");
  playBtn.querySelector("i.la").classList.remove("la-play");
  playBtn.querySelector("i.la").classList.add("la-pause");

  audio.play();

  body.style.backgroundImage = `url('${songs[songIndex].image}')`;

  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "top center";
  body.style.backgroundSize = "cover";
}

// to pause song
function pauseSong() {
  musicBg.classList.remove("play");
  playBtn.querySelector("i.la").classList.add("la-play");
  playBtn.querySelector("i.la").classList.remove("la-pause");

  audio.pause();
}

// play prev song
function playprev() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  // audio.play();
  playSong();
}

// play next song
function playnext() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  // audio.play();
  playSong();
}

// update progress as the song moves
function updateProgress(e) {
  // seek_slider.max = audio.duration;
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  seek_slider.value = progressPercent;

  if (currentTime == duration) {
    playnext();
  }
}

setInterval(updateProgress, 100);

// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;

//   audio.currentTime = (clickX / width) * duration;
// }

playBtn.addEventListener("click", () => {
  const isPlaying = musicBg.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// add to imaginary favourite
favourite.addEventListener("click", () => {
  if (favourite.style.color === "white") {
    favourite.style.color = "red";
    alert(`The song has been added to your favourite songs list`);
  } else {
    favourite.style.color = "white";
  }
});

// repeat the song
repeatSong.addEventListener("click", () => {
  audio.currentTime = 0;
  playSong();
});

prevBtn.addEventListener("click", playprev);
nextBtn.addEventListener("click", playnext);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = audio.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  audio.currentTime = seekto;
}
