const todoText = document.getElementById("todo-text");
const todoTime = document.getElementById("todo-time");
const addBtn = document.getElementById("add-btn");
const listCon = document.getElementById("list-con");

// todolist
const list = [];
addBtn.onclick = () => {
  const text = todoText.value;
  const time = todoTime.value;
  list.push({ text, time, isComplete: false });

  update();
};

// is completed checker
const isCompleted = (complete) => {
  const completeList = document.querySelectorAll(".list");
  list.map((item, i) => {
    if (complete === i) {
      item.isComplete = item.isComplete ? false : true;
      if (item.isComplete) {
        completeList[i].classList.add("isComplete");
      } else {
        completeList[i].classList.remove("isComplete");
      }
      console.log(list);
      // item.isComplete = true;
    }
    // if (item.isComplete) {

    // }
  });
};

const edit = (i) => {
  const currText = document.querySelectorAll(".current-text");
  list[i].text = todoText.value;
  list[i].time = todoTime.value;
  update();
};
const update = () => {
  let listHtml = "";
  list.map((item, i) => {
    listHtml += `<div class="list">
          <div class="current-text">${item.text}</div>
          <div>${item.time}</div>
          <div class="btn-con">
            <button id="complete" onclick='isCompleted(${i})'>Complete</button>
            <button id="edit" onclick="edit(${i})">Edit</button>
            <button id="remove" onclick='remove(${i})'>Remove</button>
          </div>
        </div>`;
  });
  listCon.innerHTML = listHtml;
  todoText.value = "";
  todoTime.value = "";
  isCompleted();
};

// cta buttons
const removeBtn = document.getElementById("remove");
const editBtn = document.getElementById("edit");
const completeBtn = document.getElementById("complete");
// remove todo lists
const remove = (i) => {
  list.splice(i, 1);
  update();
};
