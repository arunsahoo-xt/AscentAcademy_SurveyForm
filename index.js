document.querySelector(".submit-btn").addEventListener("click",ValidateEmail);
function ValidateEmail(event)
{
var name=document.querySelector(".input-name").value;  
var feedback=document.querySelector(".feedback").value;  
var inputText=document.querySelector(".email-input").value;  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(inputText);
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}
else if(!inputText.value.match(mailformat))
{
alert("You have entered an invalid email address!");
return false;
}
else if(feedback.length>100){  
    alert("Feedback should be between 100 characters.");  
    return false;  
    }  
event.preventDefault();
return true;
}