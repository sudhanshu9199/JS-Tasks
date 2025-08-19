let allElem = document.querySelectorAll(".elem");
let FullElemsPage = document.querySelectorAll(".fullElem");
let FullElemsPageBtn = document.querySelectorAll(".fullElem .back");

function openFeatures() {
  allElem.forEach((elem) => {
    elem.addEventListener("click", () => {
      FullElemsPage[elem.id].style.display = "block";
    });
  });

  FullElemsPageBtn.forEach((back) => {
    back.addEventListener("click", () => {
      FullElemsPage[back.id].style.display = "none";
    });
  });
}

openFeatures();

function todoList() {
  let currentTask = [];
  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else console.log("Empty task");

  let form = document.getElementById("form");
  let inputbox = document.getElementById("inputBox");
  let detailInput = document.getElementById("detailInput");
  let check = document.getElementById("check");
  let allTask = document.querySelector(".allTask");

  function renderTask() {
    let sum = "";
    currentTask.forEach((elem, idx) => {
      sum += `<div class="task">
                    <h5>${elem.task} <span class=${elem.imp}>imp.</span></h5>
                    <button id= ${idx}>Completed</button>
                </div>`;
    });

    allTask.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    let markCompletedBtn = document.querySelectorAll(".task button");

    markCompletedBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }

  renderTask();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentTask.push({
      task: inputbox.value,
      details: detailInput.value,
      imp: check.checked,
    });
    inputbox.value = "";
    detailInput.value = "";
    check.checked = false;
    renderTask();
  });
}
todoList();

function dailyPlanner() {
  let stored = JSON.parse(localStorage.getItem("dayPlannerData")) || {};
  let lastSaved = Number(localStorage.getItem("dayPlannerTimestamp"));

  if (lastSaved && Date.now() - lastSaved > 24 * 60 * 60 * 1000) {
    stored = {};
    localStorage.removeItem("dayPlannerData");
    localStorage.setItem("dayPlannerTimestamp", Date.now());
  }
  let dayPlannerData = stored;
  let dayPlanner = document.querySelector(".day-planner");

  let hours = Array.from({ length: 20 }, (_, idx) => {
    let startHour = 4 + idx; // 6 -> 23
    let endHour = 5 + idx; // 7 -> 24

    // Convert 24h to 12h format with Am/Pm
    let format = (h) => {
      if (h === 24 || h === 0) return "12:00 AM";
      let period = h >= 12 ? "PM" : "AM";
      let hour12 = h % 12 === 0 ? 12 : h % 12;
      return `${hour12}:00 ${period}`;
    };

    return `${format(startHour)} - ${format(endHour)}`;
  });

  let wholeDaySum = "";
  hours.forEach((elem, idx) => {
    let savedData = dayPlannerData[idx] || "";
    wholeDaySum += `<div class="day-planner-time">
                <p>${elem}</p>
                <input type="text" name="" id= ${idx} placeholder=".Hello.." value = '${savedData}'>
            </div>`;
  });

  // console.log(hours);

  dayPlanner.innerHTML = wholeDaySum;

  let dayPlannerInput = document.querySelectorAll(".day-planner input");

  dayPlannerInput.forEach((elem) => {
    elem.addEventListener("input", () => {
      dayPlannerData[elem.id] = elem.value;
      console.log(dayPlannerData);
      localStorage.setItem("dayPlannerData", JSON.stringify(dayPlannerData));
      localStorage.setItem("dayPlannerTimestamp", Date.now()); // update timestamp
    });
  });
}

dailyPlanner();

function motivationGenerator() {
  let motivationQuote = document.querySelector(".motivation-2 h1");
  let motivationAuthor = document.querySelector(".motivation-3 h2");
  async function fetchQuote() {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();

    console.log(data.quote);
    motivationQuote.innerHTML = data.quote;
    motivationAuthor.innerHTML = data.author;
  }
  fetchQuote();
}

motivationGenerator();

function pomodoroTimer() {
    
let timer = document.querySelector(".pomo-timer h1");
let startBtn = document.querySelector(".pomo-timer .start-timer");
let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
let resetBtn = document.querySelector(".pomo-timer .reset-timer");
let session = document.querySelector(".pomo-timer .session");
let isWorkSession = true;

let totalSeconds = 25 * 60;
console.log(timer);
let timeInterval = null;

function updateTime() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  timer.innerHTML = `${String(minutes).padStart("2", "0")} : ${String(
    seconds
  ).padStart("2", "0")}`;
}

function startTimer() {
  clearInterval(timeInterval);

  if (isWorkSession) {
    timeInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTime();
      } else {
        isWorkSession = false;
        clearInterval(timeInterval);
        timer.innerHTML = "05:00";
        session.innerHTML = "Break";
        session.style.color = 'rgb(228, 87, 5)';
        totalSeconds = 5 * 60;
        updateTime();
      }
    }, 1000);
  } else {
    timeInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTime();
      } else {
        isWorkSession = true;
        clearInterval(timeInterval);
        timer.innerHTML = "25:00";
        session.innerHTML = "Work Session";
  session.style.color = 'white';
        totalSeconds = 25 * 60;
        updateTime();
      }
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(timeInterval);
}

function resetTimer() {
  clearInterval(timeInterval);
  isWorkSession = true;
  totalSeconds = 25 * 60;
  session.innerHTML = 'Work Session';
  session.style.color = 'white';
  updateTime();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
}

pomodoroTimer();


function weatherFunctionality() {
  
let apikey = 'b10568824439427887735148251808';
// let sarthakApiKey = '87cf32deedd9442793a70453250305'
let city = 'Hajipur';

let header1Time = document.querySelector('.header1 h1');
let header1Date = document.querySelector('.header1 h2');
let header2Temp = document.querySelector('.header2 h2');
let header2condition = document.querySelector('.header2 h4');
let humi = document.querySelector('.header2 .humi');
let wind = document.querySelector('.header2 .wind');

let header1location = document.querySelector('.header1 .location');
let header2preci = document.querySelector('.header2 .preci');


let data = null;

if  (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      city = `${lat}, ${lon}`;
      weatherAPICall();
    },
    (err) => {
      console.warn('Location access denied, using default city:', city);
      weatherAPICall();
      
    }
  );
} else {
    console.warn("Geolocation not supported, using default city:", city);
    weatherAPICall();
}
async function weatherAPICall() {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`);

    let data = await response.json();
    console.log(data);

    header2Temp.innerHTML = `${data.current.temp_c}°C`
    header2condition.innerHTML = `${data.current.condition.text}
    <img style="width:2.5rem; height:2.5rem; vertical-align:middle; margin-left:5px;" src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" />`;
    humi.innerHTML = `Humidity: ${data.current.humidity}%`;
    wind.innerHTML = `Wind: ${data.current.wind_kph}km/h`;
    console.log(`it is (${data.region},${data.location.country})`);
    
    header1location.innerHTML = `${data.location.name} <span> (${data.location.region},${data.location.country}) </span>`;

    header2preci.innerHTML = `Precipitation: ${data.current.heatindex_c} °C`;
}
weatherAPICall();

function timeDate() {
    const totalDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date();
    let dayOfWeek = totalDaysOfWeek[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let tarik = date.getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();


    header1Date.innerHTML = `${String(tarik).padStart("2", "0")} / ${String(month).padStart("2", "0")} / ${year}`
        if (hours > 12) header1Time.innerHTML = `${dayOfWeek}, <span>${String(hours - 12).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}</span> PM`;
    else header1Time.innerHTML = `${dayOfWeek}, <span>${String(hours).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}<span> AM`;
}

setInterval(() => {timeDate()}, 1000)

}

weatherFunctionality();