let a=document.getElementById("signal");
let b=document.getElementById("signal1");
let c=document.getElementById("signal2");
function red()
{
    a.style.backgroundColor="red";
    b.style.backgroundColor="White";
    c.style.backgroundColor="white";


}
function yellow()
{
    b.style.backgroundColor="yellow";
    a.style.backgroundColor="white";
    c.style.backgroundColor="white";
}
function green()
{
    c.style.backgroundColor="green";
    b.style.backgroundColor="white";
    a.style.backgroundColor="white";
}