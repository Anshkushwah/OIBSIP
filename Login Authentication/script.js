let registerBtn = document.getElementById("register-btn");
let loginBtn = document.getElementById("login-btn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
loginBtn.addEventListener(("click"),()=>{
    nameField.style.maxHeight = "0";
    title.innerHTML= "Log In";
    registerBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
    alert("Logged In successfully");
})
registerBtn.addEventListener(("click"),()=>{
    nameField.style.maxHeight = "60px";
    title.innerHTML= "Sign Up";
    registerBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
    alert("Registerd successfully");
    
})