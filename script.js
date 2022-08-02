function validate()
{
var Name=document.getElementById("Name").value;
var Pass=document.getElementById("Pass").value;
if(Name=="Riyas"&& Pass=="12345")
{
alert("Login Successfully");
window.location.href="demo1.html";
return false;
}
else
{
alert("Invalid username or password");
}
}
