let receipe={
    title:"Tomoto pasta",
    src:"pasta.jpg",
    incrediant:["pasta","oil","onion","salt","tomoto pasta sauce","cheese"]
};







let a=document.getElementById("head1");

let b=document.getElementById("divid");

let c=document.getElementById("img1");

let d=document.getElementById("liid");

a.textContent=receipe.title;
a.style.color="red";
a.style.marginLeft="40px";



c.setAttribute("src",receipe.src);
c.classList.add("w-50");
c.style.borderRadius="20px";
c.style.marginLeft="20px";
b.appendChild(c);

let e=receipe.incrediant;

for(let s of e)
{
    let list=document.createElement("li");
    list.textContent=s
    d.appendChild(list);
    d.style.backgroundColor="#23395d";
    d.style.color="white";
    d.style.height="260px";
    d.style.width="250px";
    d.style.borderRadius="20px";
    d.style.marginLeft="20px";
    d.style.marginTop="20px";
    
}