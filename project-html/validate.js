function valibate() {
    var email = document.Myform.Email.value;
    var password = document.Myform.password.value;

    //logic 
    if (email == " ") {
        alert("Hey please enter the email id");
        return false
    }
    if (password == " ") {
        alert("Hey please enter the email id");
        return false
    }
    return true
}