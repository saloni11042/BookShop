

function handleSubmit(event){
    event.preventDefault();
    let textMessage = document.getElementById('msg').value;
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('sub').value;
    
    let messageError = document.getElementById('msgError');
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let subjectError = document.getElementById('subError');

    messageError.innerHTML="";
    nameError.innerHTML="";
    emailError.innerHTML="";
    subjectError.innerHTML="";

    let usernameRegex = /^[a-zA-Z0-9_]+$/;
    var emailRegex = /\S+@\S+\.\S+/;

    if(textMessage==""){
        messageError.innerHTML="um...yea, you have to write something to send this form."
    }

    if(username=="")
        {
            nameError.innerHTML="come on, you have a name, don't you?"
        }
    else if(!usernameRegex.test(username)){
        nameError.innerHTML="Please enter valid name"
    }
    if(email==""){
            emailError.innerHTML="no email, no message"
        }
        else if(!emailRegex.test(email)){
            emailError.innerHTML="Please enter valid email"
        }
    if(subject==""){
            subjectError.innerHTML="come on, you have a subject, don't you?"
        }
    return false
}