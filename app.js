const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box")


item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value);
            this.value = ""
        }
        saveData()
    }
    )


const addToDo = (item) => {
    // localStorage.setItem("item", JSON.stringify(item))
    // const todoitem = localStorage.getItem("item")

    const listItem = document.createElement("li");
    listItem.innerHTML = `
          ${item}
         <i class="fa-solid fa-xmark"></i>
`;
listItem.addEventListener(
    "click",
    function() {
        this.classList.toggle("done");
        saveData()
    }
)

listItem.querySelector("i").addEventListener(
    "click",
    function(){
        listItem.remove();
        saveData()
    }
)
// listItem()
toDoBox.appendChild(listItem)
}

function saveData(){
    localStorage.setItem("data", toDoBox.innerHTML);
}
function showTask(){
    toDoBox.innerHTML = localStorage.getItem("data");
}
showTask();