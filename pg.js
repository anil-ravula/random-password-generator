let btn=document.querySelector("button");
let passw=document.querySelector(".password");
let copy=document.querySelector(".fa-copy");
let notification = document.querySelector(".notification");

btn.addEventListener("click",password_generator);
copy.addEventListener("click",copyfun)

function password_generator(){
    let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&-!"
    let password="";
    for(let i=0;i<10;i++){
        let index=Math.floor(Math.random()*characters.length);
        password=password+characters[index];
    }
    
    passw.innerText = password;
    
}



function copyfun(){
    let text = passw.innerText;
    navigator.clipboard.writeText(text);//copies the text into users clipboard
     notification.classList.add("show");

    setTimeout(function(){
        notification.classList.remove("show");
    }, 2000);
}

