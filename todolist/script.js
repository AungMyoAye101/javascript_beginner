const todoText = document.getElementById("todo-text");
const todoTime = document.getElementById("todo-time");
const addBtn = document.getElementById("add-btn");
const listCon = document.getElementById("list-con");

// todolist
const list = [];
addBtn.onclick = () => {
  const text = todoText.value;
  const time = todoTime.value;
  list.push({ text, time });
  console.log(list);
  update();
};
const update = () => {
  let listHtml;
  list.map((item) => {
    listHtml = `<div class='list'>
    <p> ${item.text}</p>
    <p>${item.time} </p>
    <div> Edit</div>
    </div>`;
  });
  listCon.innerHTML += listHtml;
};
