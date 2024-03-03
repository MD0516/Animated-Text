var btn=document.querySelector(".btn");
var txt=document.querySelector("#txt");

btn.addEventListener('click',()=>{
    txt.classList.add('txt');
});

txt.addEventListener('click',()=>{
    txt.classList.remove('txt');
});
