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