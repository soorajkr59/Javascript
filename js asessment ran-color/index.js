let color=["red","blue","green","yellow","violet","rose"];

let a=document.getElementById("button");

let b=document.getElementById("bgcont");

b.style.backgroundColor="black";


function changecolor()
{
    let number=color.length;

    let randbg=Math.ceil(Math.random()*number);

    b.style.backgroundColor=color[randbg];
}
