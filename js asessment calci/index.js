let a=document.getElementById("box1");

let b=document.getElementById("box2");

let c=document.getElementById("Riid");

let d=document.getElementById("resid");
let e=document.getElementById("check");
let f=document.getElementById("p1")


function restart()
{
    let frnum=Math.random()*100;
    
    let srnum=Math.random()*100;

    a.textContent=Math.ceil(frnum);

    b.textContent=Math.ceil(srnum); 
    
    c.value="";

    f.textContent="";

}
restart();

function checkbox()
{
    let frstnum = parseInt(a.textContent);

    let srsnum = parseInt(b.textContent);

    let user = parseInt(c.value);

    let addsum = frstnum+srsnum; 

    
    if(user === addsum)
    {
        f.textContent="congratulation";
        f.style.color="green";
    }
    else
    {
        f.textContent="please try again";
        f.style.color="red";
    }

}