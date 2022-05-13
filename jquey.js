var passwordVal = '';
$(document).ready(function () {
    // Target @_this in form 
    $('body').on('change', 'input', function () {
        // console.log("this is error");
        performValidation($(this));

    });
});
// console.log("helow" + $(_this).val());
function performValidation(_this) {

    type = (_this).data('validation-type');
    // console.log(type);

    switch (type) {
        case 'username': {
            if (!validate_Username(_this)) {
                //setErrorMsg(_this);
            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'phone': {
            if (!validate_phone(_this)) {

            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'email': {
            if (!validate_email(_this)) {

            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'password': {
            if (!validate_Password(_this)) {

            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        case 'cpassword': {
            if (!validate_ConPassword(_this)) {
                

            }
            else {
                setSuccessMsg(_this);
            }
        }
            break;
        default: return true;
    }

    enableSubmitButton(_this);
}
// check empty for reqier field
function checkEmpty(_this) {

    const userVal = $.trim($(_this).val());
    if ($(_this).prop('required') && userVal === "") {
        setErrorMsg(_this, $(_this).prop('name') + ' cannot be blank!');
        // console.log("userVal", $(_this).prop('name') + ' cannot be blank!');
        return false;
    } else {
        return userVal;
    }

}


// validate_Username
function validate_Username(_this) {
    //   var userVal;

    var userVal = checkEmpty(_this);
    if (userVal) {

        if (userVal.length < 4) {
            setErrorMsg(_this, 'username minimum 4 characters!');
        }
        else if (_this == /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(userVal)) {
            setErrorMsg(_this, 'Enter valid username');
        }
        else {
            setSuccessMsg(_this);
        }
    }

}
// >>validate_number<<
function validate_phone(_this) {

    var phoneVal = checkEmpty(_this);

    if (phoneVal) {

        if (phoneVal && phoneVal.length !== 11) {
            setErrorMsg(_this, 'phone number should be 11 digits');
        } else {
            setSuccessMsg(_this);
        }
    }

}

// >>Validate_email<<
function validate_email(_this) {

    var emailVal = checkEmpty(_this);
    if (emailVal) {

        if (emailVal === "") {
            setErrorMsg(_this, 'email cannot be blank!');
        } else if (emailVal.length < 4) {
            setErrorMsg(_this, 'email minimum 4 characters!');
        }
        else {
            setSuccessMsg(_this);
        }
    }
}
validate_Password
function validate_Password(_this) {
   passwordVal = checkEmpty(_this);
    // passwordVal = $(_this).val();
    if (passwordVal) {

        if (passwordVal === "") {
            setErrorMsg(_this, 'Password no cannot be Null!');
        } else if (passwordVal.length < 8) {
            setErrorMsg(_this, 'Minimum 8 characters!');
        }
        else {
            setSuccessMsg(_this);
        }
    }
    
}
// >> validate_ConPassword<<
function validate_ConPassword(_this) {
    var ConpasswordVal = checkEmpty(_this);
    // const ConpasswordVal = $(_this).val();
        if (ConpasswordVal) {
           if (passwordVal != ConpasswordVal) {
            setErrorMsg(_this, 'Confirm password should be Matced!');
        } else {
            setSuccessMsg(_this);
        }
    }
    
}



function removeSpan(_this) {

    $(_this).next("span").remove();
}

// Set the error message function
function setErrorMsg(_this, error) {
    removeSpan(_this);
    $(_this).addClass('error');
    $(_this).removeClass('success');
    // alert(error);
    $(_this).after('<span class="error">' + error + '</span>');

}

// Set the successMessage function
function setSuccessMsg(_this) {
    // alert("success");
    $(_this).removeClass('error');
    $(_this).addClass('success');
    removeSpan(_this);
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
    })

    $(form).find('input.success').each(function () {
        totalSuccess++;
    })

    console.log("totalreq ", totalrequired, "totalsucc", totalSuccess);

    if (totalrequired < totalSuccess) {

        $(form).find(':submit').removeAttr('disabled')
    }
    else {

        $(form).find(':submit').attr('disabled', 'disabled');

    }
}

