 let obj={
    imgsrc:"logo new.jpg",
    h1:"RAHUL ATTULURI",
    h2:"AGE:25"
 };

let a=document.getElementById("divid");
a.style.backgroundColor="#CF9FFF";
a.style.height="100vh"

 let b=document.getElementById("div2id");
 b.style.backgroundColor="white";
 b.style.height="500px";
 b.style.width="500px";
 b.style.borderRadius="250px";
 b.style.marginLeft="400px";

 let d=document.getElementById("imgid");
 
 d.setAttribute("src",obj.imgsrc);
 d.classList.add("img");
 d.style.marginLeft="70px";
 d.style.marginTop="60px";
 b.appendChild(d);

 let c=document.getElementById("head1");
 c.textContent=obj.h1;
 c.style.fontSize="25px";
 c.style.marginLeft="560px";
 c.style.color="white";
 c.style.marginTop="20px";

 let f=document.getElementById("head2");
 f.textContent=obj.h2;
 f.style.fontSize="25px";
 f.style.color="white";
 f.style.marginLeft="615px";
 f.style.marginTop="20px";
 

 





