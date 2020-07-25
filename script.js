const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Quran
const songs = [
  {
    name: '000_1',
    displayName: 'Explanation of Bismillah',
    artist: 'Ustaz Kalla',
  },
  {
    name: '001_001',
    displayName: 'Surat Fatiha',
    artist: 'Ustaz Kalla',
  },
   {
    name: '002_001',
    displayName: 'Surat Baqara 1-4',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_005',
    displayName: 'Surat Baqara 5-16',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_017',
    displayName: 'Surat Baqara 17-23',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_024',
    displayName: 'Surat Baqara 24-28',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_029',
    displayName: 'Surat Baqara 29-36',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_037',
    displayName: 'Surat Baqara 37-47',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_048',
    displayName: 'Surat Baqara 48-56',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_057',
    displayName: 'Surat Baqara 57-60',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_062',
    displayName: 'Surat Baqara 61-68',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_070',
    displayName: 'Surat Baqara 69-75',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_077',
    displayName: 'Surat Baqara 78-82',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_084',
    displayName: 'Surat Baqara 83-87',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_089',
    displayName: 'Surat Baqara 88-92',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_094',
    displayName: 'Surat Baqara 93-100',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_102',
    displayName: 'Surat Baqara 101-104',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_106',
    displayName: 'Surat Baqara 105-111',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_113',
    displayName: 'Surat Baqara 112-118',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_120',
    displayName: 'Surat Baqara 119-125',
    artist: 'Ustaz Kalla',
  },
  {
    name: '002_127',
    displayName: 'Surat Baqara 126-133',
    artist: 'Ustaz Kalla',
  },
  // {
  //   name: '002_135',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_142',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_146',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_154',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_164',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_170',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_182',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_187',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_191',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_197',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_203',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_211',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_216',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_220',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_225',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_231',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_234',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_238',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_246',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_249',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_253',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_257',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_260',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_265',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_270',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_275',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_282',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '002_283',
  //   displayName: 'Surat Baqara 6-',
  //   artist: 'Ustaz Kalla',
  // },
  // {
  //   name: '',
  //   displayName: '',
  //   artist: 'Ustaz Kalla',
  // },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);
