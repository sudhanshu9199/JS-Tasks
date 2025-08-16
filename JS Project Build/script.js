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
  let lastSaved = localStorage.getItem("dayPlannerTimestamp");

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
