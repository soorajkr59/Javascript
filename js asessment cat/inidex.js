let a=document.getElementById("one");
let b=document.getElementById("two");
let v=document.getElementById("button");
let d=document.getElementById("bt1");
let d1=document.getElementById("bt2");
function on()
{
    a.src="bulbon.png";
    b.src="cat1.png";
    v.textContent="switch on";
    v.style.color="green";
    d1.style.backgroundColor="green";
    d.style.backgroundColor="white";
    
}
function off()
{
    a.src="bulboff.png";
    b.src="cat2.png";
    v.textContent="swicth off";
    v.style.color="red";
    d.style.backgroundColor="red";
    d1.style.backgroundColor="white";
}