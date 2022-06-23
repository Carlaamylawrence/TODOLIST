let lists = JSON.parse(localStorage.getItem("records"))
  ? JSON.parse(localStorage.getItem("records"))
  : [
      {
        title: "Make bed",
        date: new Date(),
        id: 1,
      },
    ];

function showItems(lists) {
  document.querySelector("#displayRecords").innerHTML = "";
  lists.forEach((record, i) => {
    document.querySelector(
      "#displayRecords"
    ).innerHTML += `<li class="item"> <input type="checkbox" id="complete"> ${record.title} <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button></li>`;
  });
}

function addRecord() {
  //   e.preventDefault();
  lists.push({
    title: document.getElementById("title").value,
    date: new Date(),
    id: lists.length + 1,
  });
  // save item
  showItems(lists);
  console.log(lists);
  localStorage.setItem("records", JSON.stringify(lists));
}

function deleteRecord(id) {
  if (id > -1) {
    lists.splice(id, 1);
    // After delete
    localStorage.setItem("records", JSON.stringify(lists));
  } else {
    console.log("Name was not found");
  }
  loadDate();
  showItems(lists);
}
// load data
function loadDate() {
  console.table(lists);
}
function completed(){
lists = document.querySelector('ul');
lists.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

}
// add event listerner
document.querySelector("#addRecord").addEventListener("click", addRecord);

// delete record
document.querySelector("#deleteRecord").addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let index = lists.findIndex((item) => item.title === title);
  console.log(index);
  deleteRecord(index);
});
