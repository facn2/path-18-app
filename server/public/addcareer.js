// Checks to see if universities have been selected
// If at least one is selected the checkbox validator is checked
// checkboxValidator is required in HTML validation

var form = document.querySelector('#addCareer');
var checkboxValidator = document.querySelector('#checkboxValidator');
var submitButton = document.querySelector('#submitButton');

function isChecked(id) {
  return document.getElementById(id).checked;
}

function formValidate() {
  var unis = document.getElementsByClassName('uni');
  var unisArray = Array.from(unis);
  unisArray.forEach(function(uni) {
    if (isChecked(uni.id)) {
      checkboxValidator.checked = true;
      checkboxValidator.setCustomValidity('');
    }
  });
  if (!checkboxValidator.checked) {
    checkboxValidator.setCustomValidity(
      'Please select at least one of the universities below',
    );
  }
}

submitButton.addEventListener('click', formValidate);
