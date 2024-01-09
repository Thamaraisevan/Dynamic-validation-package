
export function nameFieldCheck(value) {

    var pattern = /^[A-Za-z' \-.]+$/;
    // var pattern =/^[a-zA-Z ]+(?:\s+[a-zA-Z ]+)*.$/;


    const inputValue = value || '';

    if (inputValue?.toString().length >= 1) {

        if (inputValue.trim() == "sam") {
            return { 'nameCheck': true };
        }
        if (inputValue[0] == " ") {
            return { 'emptynotAllowed': true }
        }
        if (!pattern.test(inputValue)) {
            return { 'specialCharacter': true }
        }
    }

    return null;
}

export function emailValidation(value) {

    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailValue = value || '';

    if (emailValue?.toString().length >= 1) {
        if (emailValue[0] == " ") {
            console.log("inside mail")
            return { 'emptynotAllowed': true }
        }
        if (!emailPattern.test(emailValue)) {
            return { 'notvalidemail': true };
        }
    }

    return null;
}

export function numberValidation(value) {

    const check_value = value || '';

    if (check_value?.toString().length >= 1) {
        if (check_value?.toString().length < 3) {
            return { "minimumLength": true }
        }
        if (check_value?.toString().length < 10) {
            return { "phoneNumberDigit": true }
        }
    }

    return null;
}
/**password field validation */
export function passwordValidation(value) {

    const passValue = value || '';
    if (passValue?.toString().length >= 1) {
        if (passValue[0] == " ") {
            return { "emptynotallowed": true }
        }
        if (passValue.length < 7) {
            return { 'minimumcharacter': true }
        }
        if (passValue.length > 50) {
            return { 'maximumCharacter': true }
        }

        var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/;

        if (passValue?.toString().length >= 1) {
            if (!specialcharacterreg.test(passValue)) {
                return { "strongPassword": true };
            }
        }
    }

    return null;
}

export function confirmPasswordValidators(value1,value2) {

    /**                            condtion  (ternay operator)           ?  true : false; */
    return value1.password == value2.cpass ? null : { "passwordmismatch": true };


}

export function strongPasswordValidation(value) {

    const passValue = value || '';
    var specialcharacterreg = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^@$!%*#?&]*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/;
    if (passValue?.toString().length >= 1) {
        if (!specialcharacterreg.test(passValue)) {
            return { "strongPassword": true };
        }
    }

    return null;
}

/**future date restriction */
export function futureDaterestrict(value) {

    const dateValue = value || '';
    if (dateValue?.toString().length >= 1) {
        const currentDate = new Date();

        /** Parse the input date*/
        const parsedInputDate = new Date(dateValue);
        if (parsedInputDate > currentDate) {
            return { "futureDate": true }
        }

    }

    return null;

}

