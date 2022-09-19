let a=document.getElementById("my");
let b=document.getElementById("btn");
let c=document.getElementById("btn1");
let d=document.getElementById("btn2");
let e=document.getElementById("btn3");
let f=document.getElementById("use");


function btn1()
{
    a.style.backgroundColor="red";
    b.style.backgroundColor="red";
    c.style.backgroundColor="white";
    d.style.backgroundColor="white";
    e.style.backgroundColor="white";
    f.textContent="#ff0000";


}
function btn2()
{
    a.style.backgroundColor="blue";
    c.style.backgroundColor="blue";
    b.style.backgroundColor="white";
    d.style.backgroundColor="white";
    e.style.backgroundColor="white";
    f.textContent="#0000FF";
}
function btn3()
{
    a.style.backgroundColor="green";
    d.style.backgroundColor="green";
    b.style.backgroundColor="white";
    c.style.backgroundColor="white";
    e.style.backgroundColor="white";
    f.textContent="#00FF00";
}
function btn4()
{
    a.style.backgroundColor="violet";
    e.style.backgroundColor="violet";
    b.style.backgroundColor="white";
    c.style.backgroundColor="white";
    d.style.backgroundColor="white";
    f.textContent="#8F00FF";
}
