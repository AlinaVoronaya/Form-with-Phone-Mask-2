import {passwordEye, passwordInput} from "./showPassword";

export function formSubmit(form) {
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                resetForm(form);
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке формы:', error);
        })
        .finally(() => {
            passwordInput.setAttribute('type', 'password');
            passwordEye.classList.remove('active');
        });
}

export function resetForm(form) {
    for (const element of form.elements) {
        element.value = '';
    }
}