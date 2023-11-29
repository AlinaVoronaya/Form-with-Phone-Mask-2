import { getInputNumbersValue } from "./phoneMask";
import { formSubmit } from "./formSubmit";

export function validatePhone(phoneInput) {
  const phoneValue = getInputNumbersValue(phoneInput);
  return (phoneValue.length >= 11);
}

export function validatePassword(passwordInput) {
  const passwordValue = passwordInput.value;
  return (passwordValue.length >= 3 && passwordValue.length <= 15);
}

export function validateForm(event) {
  event.preventDefault();
  const form = event.target;

  let hasError = false;

  const phoneHint = document.querySelector(".phone-hint");
  const passwordHint = document.querySelector(".password-hint");

  Array.from(form.elements).forEach((element) => {
    let isValid = false;

    switch (element.type) {
      case "tel":
        isValid = validatePhone(element);
        if (!isValid) {
          hasError = true;
          phoneHint.textContent = "Пожалуйста, введите полный телефонный номер.";
          phoneHint.classList.add("show-hint");
        } else {
          phoneHint.classList.remove("show-hint");
        }
        break;

      case "password":
      case "text":
        isValid = validatePassword(element);
        if (!isValid) {
          hasError = true;
          passwordHint.textContent = "Пароль должен содержать от 3 до 15 символов.";
          passwordHint.classList.add("show-hint");
        } else {
          passwordHint.classList.remove("show-hint");
        }
        break;

      default:
        isValid = true;
        break;
    }
  });

  if (!hasError) {
    formSubmit(form);
  }
}