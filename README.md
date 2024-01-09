## About Package
This entire package is used for validating the input Fields with reusable.

## Installation

npm i inputs-validation-package


## Importance of the Package
Form validations is main thing and commonly used in modern web pages 

# How to Use
import { emailValidation } from 'validators-reusable';

# How to use this within a component

import { emailValidation } from 'validators-reusable';

# For Email Validation

import { emailValidation } from 'validators-reusable';
emailValidation("value")


# For Name Validation
import { nameFieldCheck } from 'validators-reusable';
nameFieldCheck("value")

# For Mobile Number Validation
import { numberValidation } from 'validators-reusable';
numberValidation("value")

# For Password Validation
import { passwordValidation } from 'validators-reusable';
passwordValidation("value")


# For Confirm Password Validation
import { confirmPasswordValidators } from 'validators-reusable';
confirmPasswordValidators("value1","value2") 

# For Strong Password Validation

import { strongPasswordValidation } from 'validators-reusable'; 
strongPasswordValidation("value") 

#For futureDaterestrict Validation

import { futureDaterestrict } from 'validators-reusable'; 
futureDaterestrict("value")

## params

"value" = string