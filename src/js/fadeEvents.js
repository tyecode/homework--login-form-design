const toSignin = document.querySelector('.to-signin');
const toSignup = document.querySelector('.to-signup');
const signinForm = document.querySelector('.form__signin');
const signupForm = document.querySelector('.form__signup');

toSignin.addEventListener('click', () => {
    if (signupForm.classList.contains('fade-in')) {
        signupForm.classList.remove('fade-in');
    }
    signupForm.classList.add('fade-out');
    
    if(signinForm.classList.contains('fade-out')) {
        signinForm.classList.remove('fade-out');
    }
    signinForm.classList.add('fade-in');

    setTimeout(() => {
        signinForm.classList.remove('hide');
        signupForm.classList.add('hide');
    }, 700);
});

toSignup.addEventListener('click', () => {
    if(signinForm.classList.contains('fade-in')) {
        signinForm.classList.remove('fade-in');
    }
    signinForm.classList.add('fade-out');

    if(signupForm.classList.contains('fade-out')) {
        signupForm.classList.remove('fade-out');
    }
    signupForm.classList.add('fade-in');

    setTimeout(() => {
        signupForm.classList.remove('hide');
        signinForm.classList.add('hide');
    }, 700);
});

// Forgot password popup

const forgotPasswordLink = document.querySelector('.forget-password');
const forgotPasswordPopup = document.querySelector('.forgot-password-popup');
const forgotPasswordClose = document.querySelector('.forgot-password-popup__close');

forgotPasswordLink.addEventListener('click', () => {
    if(forgotPasswordPopup.classList.contains('fade-out')) {
        forgotPasswordPopup.classList.remove('fade-out');
    }
    forgotPasswordPopup.classList.remove('hide');
    forgotPasswordPopup.classList.add('fade-in');     
});

forgotPasswordClose.addEventListener('click', () => {
    if(forgotPasswordPopup.classList.contains('fade-in')) {
        forgotPasswordPopup.classList.remove('fade-in');
    }
    forgotPasswordPopup.classList.add('fade-out');   

    setTimeout(() => {
        forgotPasswordPopup.classList.add('hide');
    }, 700);
});