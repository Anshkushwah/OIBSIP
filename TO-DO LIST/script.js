let inputBox = document.getElementById("ibox")
let input = document.getElementById("ibox")
let list = document.getElementById("list")
let btn = document.getElementsByClassName("btn")
document.querySelector(".btn").addEventListener("click",()=>{
    if(input.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    input.value = "";
    saveData();
    
})
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

});
function saveData(){
    localStorage.setItem("data",list.innerHTML)
}
function showTask(){
    list.innerHTML= localStorage.getItem("data");
}
showTask();