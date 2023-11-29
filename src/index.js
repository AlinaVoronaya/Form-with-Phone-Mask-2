require("./styles.scss");
import { applyPhoneMask, onPhonePaste, deleteFirstSymbol } from "./modulesJs/phoneMask";
import { showPassword, passwordEye } from "./modulesJs/showPassword";
import { validateForm } from "./modulesJs/validation";

if (process.env.NODE_ENV === "development") {
    require("../index.html");
}

document.addEventListener("DOMContentLoaded", function () {
    let phoneInput = document.querySelector(".phone");
    phoneInput.addEventListener("input", applyPhoneMask);
    phoneInput.addEventListener("keydown", deleteFirstSymbol);
    phoneInput.addEventListener("paste", onPhonePaste);
})

passwordEye.addEventListener('click', showPassword);

const form = document.getElementById("form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm(event);
    });
}