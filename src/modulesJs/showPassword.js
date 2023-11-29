export const passwordEye = document.querySelector(".password__eye");
export const passwordInput = document.querySelector(".password__input");

export function showPassword () {
    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
        passwordEye.classList.add('active');
    } else {
        passwordInput.setAttribute('type', 'password');
        passwordEye.classList.remove('active');
    }
}