function clearerror(){
    errors=document.getElementsByClassName('ferror');
    for(let items of errors){
        items.innerHTML="";
    }
}


/*function forname(name){
    
   
}
function forlname(name){
    let name= document.getElementsById('lastname').value;
    if(name==""){
        document.getElementById('llname').innerHTML="Please Enter Your Last Name.";
        return false;
    }
    else if(name.length<3){
        document.getElementById('llname').innerHTML="Your name is too shirt.";
        return false;
    }
    else if(name.length>15){
        document.getElementById('llname').innerHTML="Your name is too long.";
        return false;
    }
}*/


function validform(){
    
    clearerror();
    let name=document.getElementById('Fname').value;
    
    if(name==""){
        document.getElementById('ffname').innerHTML="Please enter your first name.";
        return false;
        
       
    }
     if(name.length<3){
        document.getElementById('ffname').innerHTML="Your name is too short.";
        return false;
    }
    
    let lastname=document.getElementById('lastname').value;
    if(lastname==""){
        document.getElementById('llname').innerHTML="Please enter your last name.";
        return false;
    }
    let email=document.getElementById('Email').value;
    atthe = email.indexOf("@");
    dot= email.lastIndexOf(".");
    if(email==""){
        document.getElementById('EEmail').innerHTML="Please enter your correct email.";
        return false;
    }
    if(atthe<1||dot<1){
        document.getElementById('EEmail').innerHTML="Plese enter the correct id. Example:xyz@gmail.com";
        return false;
    }
    let pword=document.getElementById('pw').value;
    
    
    if(pword==""){
        document.getElementById("ppw").innerHTML="Please enter your password.";
        return false;
    }
   
    
}
   
   

    
    