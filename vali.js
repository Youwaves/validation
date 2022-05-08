
function performValidation(_this) {

    type = (_this).data('validation-type');



    switch (type) {
        case 'username': {
            if (!validate_Username(_this)) {
                setErrorMsg(_this);
            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'phone': {
            if (!validate_phone(_this)) {
                setErrorMsg(_this);
            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'email': {
            if (!validate_email(_this)) {
                setErrorMsg(_this);
            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'password': {
            if (!validate_Password(_this)) {
                setErrorMsg(_this);
            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'ConPassword': {
            if (!validate_ConPassword(_this)) {
                setErrorMsg(_this);
            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        default: return true;



    }
}
// validate_Username
function validate_Username(_this) {
    //   var userVal;
    const userVal = username.value.trim();
    if (userVal === "") {
        setErrorMsg(username, 'username cannot be blank!');
    } else if (username.length <= 4) {
        setErrorMsg(username, 'username minimum 4 characters!');
    } else if (username = /^[a-zA-Z0-9]*$/.test(userVal)) {
        setErrorMsg(username, 'Enter valid username');
    }
    else {
        setSuccessMsg(username);
    }

}
// validate_number
function validate_phone(_this) {
    //  var phoneVal;
    const phoneVal = phone.value.trim();
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone no cannot be blank!');
    } else if (phoneVal.length !== 11) {
        setErrorMsg(phone, 'Invalid Phone no..');
    } else {
        setSuccessMsg(phone);
    }




}
// more email validation
function isEmail(email) {
    var mail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return mail.test(email);
}
// validate_Email
function validate_email(_this) {
    //  var emailVal
    const emailVal = email.value.trim();
    if (emailVal === "") {
        setErrorMsg(email, 'email cannot be blank!');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'invalid email!');
    } else {
        setSuccessMsg(email);
    }

}
// Validation strong Password
function StrongPswd(password) {
    return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(password);
}
// validate_Password
function validate_Password(_this) {
    // var passwordVal
    const passwordVal = password.value.trim();
    // validate password
    if (passwordVal === "") {
        setErrorMsg(password, 'Password no cannot be Null!');
    } else if (passwordVal.length <= 8) {
        setErrorMsg(password, 'Minimum 8 characters!');
    }
    else if (!StrongPswd(password)) {
        setErrorMsg(password, 'invalid Password!');

    } else {
        setSuccessMsg(password);
    }

}
// validate_ConPassword
function validate_ConPassword(_this){
      // var ConpasswordVal
      const ConpasswordVal = password.value.trim();
    if (ConpasswordVal === "") {
        setErrorMsg(cpassword, 'Confirm Ppassword no cannot be Null!');
      } else if (passwordVal != ConpasswordVal) {
        setErrorMsg(cpassword, 'Confirm password should be Matced!');
      } else {
        setSuccessMsg(cpassword);
      }
 }
// Set the error message function
function setErrorMsg(_this, error){

    $(_this).addClass('error');

    $(_this).after('<span class='span - error'>' + error + '</span>');


}

// Set the successMessage function
function setSuccessMsg(_this){

    $(_this).removeClass('error');
    $(_this).addClass('success');

    $(_this).closest('.span-error').remove();


    enableSubmitButton(_this);

}

function getParentForm(_this) {

    return $(_this).parents('form').first();
}

function enableSubmitButton(_this) {

    var form = getParentForm(_this);

    var totalrequired = 0;
    var totalSuccess = 0;

    $(form).find('input[required]').each(function () {
        totalrequired++;
    }

	$(form).find('input.success').each(function () {
        totalSuccess++;
    }

	if (totalrequired === totalSuccess) {
        $(form).find('submit').removeAttr('disabled')
    }
    else {

        $(form).attr('disabled', 'disabled');

    }


}

// this validation
// validate_number
// function validate_phone(_this) {
//     //  var phoneVal;
//     const phoneVal = phone.value.trim();
//     if (phoneVal === "") {
//         setErrorMsg(phone, 'phone no cannot be blank!');
//     } else if (phoneVal.length !== 11) {
//         setErrorMsg(phone, 'Invalid Phone no..');
//     } else {
//         setSuccessMsg(phone);
//     }




// }
// // more email validation
// function isEmail(email) {
//     var mail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//     return mail.test(emailVal);
// }
// // validate_Email
// function validate_email(_this) {
//     //  var emailVal
//     const emailVal = email.value.trim();
//     if (emailVal === "") {
//         setErrorMsg(email, 'email cannot be blank!');
//     } else if (!isEmail(emailVal)) {
//         setErrorMsg(email, 'invalid email!');
//     } else {
//         setSuccessMsg(email);
//     }

// }
// // Validation strong Password
// function StrongPswd(password) {
//     return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(passwordVal);
// }
// // validate_Password
// function validate_Password(_this) {
//     // var passwordVal
//     const passwordVal = password.value.trim();
//     // validate password
//     if (passwordVal === "") {
//         setErrorMsg(password, 'Password no cannot be Null!');
//     } else if (passwordVal.length <= 8) {
//         setErrorMsg(password, 'Minimum 8 characters!');
//     }
//     else if (!StrongPswd(password)) {
//         setErrorMsg(password, 'invalid Password!');

//     } else {
//         setSuccessMsg(password);
//     }

// }
// // validate_ConPassword
// function validate_ConPassword(_this){
//       // var ConpasswordVal
//       const ConpasswordVal = password.value.trim();
//     if (ConpasswordVal === "") {
//         setErrorMsg(_this, 'Confirm Ppassword no cannot be Null!');
//       } else if (passwordVal != ConpasswordVal) {
//         setErrorMsg(cpassword, 'Confirm password should be Matced!');
//       } else {
//         setSuccessMsg(cpassword);
//       }
//  }

