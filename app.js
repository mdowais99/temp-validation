function Validate() {
    var name1 = document.subForm.fname;
    var name2 = document.subForm.lname;
    var email = document.subForm.email;
    var phNumb = document.subForm.phNumber;
    var pass = document.subForm.password;
    console.log(name1.value)

    if (name1.value.length <= 0) {
        alert("First Name* is Required");
        name1.focus();
        return false;
    }else{
        name1.style.border='2px solid green';
        
    }

    if (name2.value.length <= 0) {
        alert("Last Name* is Required");
        name2.focus();
        return false;
    }

    if (email.value.length <= 0) {
        alert("Email* is Required");
        email.focus();
        return false;
    }

    if (phNumb.value.length <= 0) {
        alert("Phone Number* is Required");
        phNumb.focus();
        return false;
    }

    if (pass.value.length <= 0) {
        alert("Password* is Required");
        pass.focus();
        return false;
    }

    
    alert(pass.value);
    return false;
    
    
}



// ///==========SECOND METHOD===========///////

// function validateString(id) {
//     var elem = document.getElementById(id)
//     var regExp = /^[a-zA-Z ]+$/;
//     if (!regExp.test(elem.value)) {
//         alert('Enter String in Name')
//         elem.style.border = '3px solid red';
//         return false;
//     } else {
//         elem.style.border = '3px solid green';
        
//     }
// }



// function validateString2(id){
//     var elem = document.getElementById(id)
//     var regAxp = /^[a-zA-Z ]+$/;
//     if (!regAxp.test(elem.value)){
//         alert('Enter String in Last Name')
//         elem.style.border='3px solid red';
//         return false;
        
//     }else{
//         elem.style.border='3px solid green';
        
//     }
// }

// function validateEmail() {
//     var elem = document.getElementById("emailer")
//     var regExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2-4}$/;
//     if (!regExp.test(elem.value)) {
//         alert("Enter valid Email Address");
//         elem.style.border = '3px solid red';
//         return false;
//     } else {
//         elem.style.border = '3px solid green';
//     }
// }

// function validNumber(id) {
//     var elem = document.getElementById(id);
//     var regExp = /^[0-9a-z]+$/
//     if (!regExp.test(elem.value)) {
//         alert("Enter valid Phone Number");
//         elem.style.border = '3px solid red';
//         return false;
//     } else {
//         elem.style.border = '3px solid green';
//     }
// }