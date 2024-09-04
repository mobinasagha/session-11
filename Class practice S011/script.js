const inputText=document.querySelector(".inputText");
const itemContainer=document.querySelector(".items");
const clickHandler = (event) => {
const newElement=document.createElement("li");
newElement.classList.add("listItem");
newElement.innerText =event.target.value;
event.target.value="";
itemContainer.appendChild(newElement);
const newElementButton=document.createElement("button");
newElementButton.classList.add("remove");
newElementButton.innerText =" X ";
newElement.appendChild(newElementButton);
const deleteItemHandler = () => itemContainer.removeChild(newElement);
newElementButton.addEventListener("click",deleteItemHandler);
}
inputText.addEventListener("change", clickHandler);
