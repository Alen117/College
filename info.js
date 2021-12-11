/******************************************************************** 
I declare that my assignment is wholly my own work in accordance with Seneca 
Academic Policy. No part of this assignment has been copied manually or 
electronically from any other source (including web sites) except for the 
information supplied by the WEB222 instructors and / or made available in this 
assignment for my use. 
I also declare that no part of this assignment has been distributed to other 
students. 
Name: Alen Thomas
Dated: 12/10/21
********************************************************************/

function checkForm() 
{
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const uname=document.getElementById('uname');
const age=document.getElementById('age');

var errorsFname = document.getElementById("errorsFname");
var errorsLname = document.getElementById("errorsLname");
var errorsPassword = document.getElementById("errorsPassword");
var errorsUname = document.getElementById("errorsUname");
var errorsEdu = document.getElementById("errorsEdu");

let i=0;
if(!allLetters(fname.value,errorsFname) )
{
    var err = document.createTextNode("Incorrect Format - First Name");
    errorsFname.appendChild(err);
    i++;
}
if(!allLetters(lname.value,errorsLname)  ) 
{
    var err = document.createTextNode("Incorrect Format - Last Name");
    errorsLname.appendChild(err);
    i++;
}
if(!Password(password1.value,password2.value,errorsPassword)) i++;
if(!userName(uname.value,errorsUname)  ) i++;
if(!checkselect(errorsEdu) ) i++;
                   
if(i==0) 
{
    alert("success");
     return true;
}
else 
     return false;
   
}


function allLetters(s)
  {
   for(i=0;i<s.length;i++)
   {
     if(!(/^[a-zA-Z]+$/.test(s) && /[A-Z]/.test(s[0])))//condition - whether the word has only alphabets && starts with uppercase
     return false;
   }
   return true;
  }
  function Password(pass1,pass2,errors)
  {
     countCap=0;
     countDig=0;
     for(i=0;i<pass1.length && pass1.length>=6 ;i++)//count - number of Uppercase letters, and digits ; only if length >= 6 
     {
          if(/[0-9]/.test(pass1[i]))//counts digits
          countDig++;
          if(/[A-Z]/.test(pass1[i]))//counts uppercase letters
          countCap++;
     }
     if(/^[a-zA-Z0-9]+$/.test(pass1) && countDig>0 && countCap>0)//counts can be >0 only if length >=6 
     {
          if(pass1 == pass2)//if first password is valid , it compares with the second password
          return true;
          else
          {
               var err = document.createTextNode( "Incorrect Match - Passwords");
               errors.appendChild(err);
               return false;
          }
     }
     else// if the password has insufficient counts, its improper format
     {
          var err = document.createTextNode( "Incorrect Format - Password");
          errors.appendChild(err);
          return false;
     }
  }
  function userName(s,errors)
  {
     if(!(/[a-zA-Z]/.test(s[0]) && s.length>=6))//checks whether first letter is alphabet length greater than 6
     {
          var err = document.createTextNode( "Incorrect Format - User Name");
          errors.appendChild(err);
          return false;
     }
     else 
     return true;
  }
function checkselect(errors) 
{
     if (get_checked_number() == 0) //get the number of radio buttons selected
     {  
          var err = document.createTextNode( "None Selected in - Graduation status");
          errors.appendChild(err);                                     
          return false; 
     }
     return true;
 } 
 function get_checked_number() 
 {
     var checkbox_num = document.signup.gradstatus.length;//number of radio buttons
     var count = 0;
     for (var i = 0; i < checkbox_num; i++) //loop through al the buttons
     {
          if (document.signup.gradstatus[i].checked == true)  // true  = checked 
              count++;
     } // End of for
     return count;		
}
function  clearShowErrors() //clear the error list so that the next time on execution the errors wont stack up
{
     document.querySelector('#errorsFname').innerHTML = " ";  
     document.querySelector('#errorsLname').innerHTML = " ";  
     document.querySelector('#errorsPassword').innerHTML = " ";  
     document.querySelector('#errorsUname').innerHTML = " ";  
     document.querySelector('#errorsEdu').innerHTML = " ";  
}  
