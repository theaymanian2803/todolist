const itemForm = document.querySelector("#form");
const itemInput = document.querySelector("#input");
const itemList = document.querySelector(".item-list");

function addItem(e) {
  e.preventDefault();
  //!check if item exist
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("please fill a value");
    return;
  }
  //!create list Item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const btn = createButton("remove");
  //!step 4
  li.appendChild(btn);

  //!step 5 take the ul /the whole list and add to it
  itemList.appendChild(li);
  itemInput.value = "";
}
//!create button Item second step
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}
//!create icon  thirs step
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

itemForm.addEventListener("submit", addItem);
