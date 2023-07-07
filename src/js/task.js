// Запуск Пуск
const startBtn = document.querySelector(".start-btn");
const startTray = document.querySelector(".start-tray");

startBtn.addEventListener("click", () => {
  actionCenter.classList.remove("active");
  searchAction.classList.remove("search-active");
  trayBtn.classList.remove("active");
  startTray.classList.toggle("active");
});

startBtn.addEventListener("mousedown", () => {
  const startBtnImg = document.querySelector(".start-btn__img");

  startBtnImg.style.transform = "scale(0.7)";
});

startBtn.addEventListener("mouseup", () => {
  const startBtnImg = document.querySelector(".start-btn__img");

  startBtnImg.style.transform = "scale(1)";
});

// Запуск Поиска

const searchBtn = document.querySelector(".taskbar-search");
const searchAction = document.querySelector(".search-action");

searchBtn.addEventListener("click", () => {
  startTray.classList.remove("active");
  actionCenter.classList.remove("active");
  trayBtn.classList.remove("active");
  searchAction.classList.toggle("search-active");
});

// Сжатие ярлыков приложений

const appItem = document.querySelectorAll(".app-item");

appItem.forEach((el) => {
  const appImg = el.querySelectorAll(".app-img");

  el.addEventListener("mousedown", () => {
    appImg.forEach((img) => {
      img.style.transform = "scale(0.8)";
    });
  });

  el.addEventListener("mouseup", () => {
    appImg.forEach((img) => {
      img.style.transform = "scale(1)";
    });
  });
});

// Запуск Трэя

const trayBtn = document.querySelector(".tray");
const actionCenter = document.querySelector(".action-center");

trayBtn.addEventListener("click", () => {
  startTray.classList.remove("active");
  searchAction.classList.remove("search-active");
  actionCenter.classList.toggle("active");
  trayBtn.classList.toggle("active");
});

// Плеер

const playBtn = document.querySelector(".player-btn");
const imgPlay = document.querySelector(".img-play");
const audio = document.querySelector(".audio");

function audioPlay() {
  audio.classList.add("play");
  imgPlay.src = "assets/ico/taskbar/ui-ico/pause.svg";
  audio.play();
}

function audioPause() {
  audio.classList.remove("play");
  imgPlay.src = "assets/ico/taskbar/ui-ico/play.svg";
  audio.pause();
}

playBtn.addEventListener("click", () => {
  let isPlay = audio.classList.contains("play");

  if (isPlay) {
    audioPause();
  } else {
    audioPlay();
  }
});

// Close Ui

const appUiClose = document.querySelector(".close-ui");

appUiClose.addEventListener("click", (e) => {
  startTray.classList.remove("active");
  searchAction.classList.remove("search-active");
  actionCenter.classList.remove("active");
  trayBtn.classList.remove("active");
});

// Timer

function displayTime() {
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let month = currentTime.getMonth() + 1;
  let day = currentTime.getDate();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Добавляем ведущий ноль к минутам и секундам, если они состоят из одной цифры
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let timeDate = `${hours}:${minutes}`;
  let timeDays = `${day}/${month}/${year}`;

  document.querySelector("#date-time").innerText = timeDate;
  document.querySelector("#date-days").innerText = timeDays;
  console.log(currentTime);
}

// Вызываем функцию displayTime каждую секунду
setInterval(displayTime, 1000);
