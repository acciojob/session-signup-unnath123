//your JS code here. If required.
const btn = document.getElementById("submit");

const nam = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const Cfmpass = document.getElementById("confirm-password")


btn.addEventListener("click",(event)=>{
    // event.preventDefault();
    const name1 = nam.value;
    const email1 = email.value;
    const pass = password.value;
    const cfp = Cfmpass.value;

    if(pass === cfp){
        sessionStorage.setItem("name",name1)
        sessionStorage.setItem("email",email1)
        sessionStorage.setItem("password",pass)
        alert("Sign up successful!")
    }
    else{
        alert("Passwords do not match")
    }
    document.reload()
})