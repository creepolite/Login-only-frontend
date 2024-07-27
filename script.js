let signinbtn = document.querySelector('.signinbtn')
let signupbtn = document.querySelector('.signupbtn')
let body = document.querySelector('body')



signupbtn.onclick = function(){
    body.classList.add('slide')
}

signinbtn.onclick = function(){
    body.classList.remove('slide')
}