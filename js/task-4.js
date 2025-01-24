const loginForm = document.querySelector('.login-form');

function onSubmitForm(e) {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (!email || !password) {
        return alert('ALl form fields must be filled in');
    }

    const data = {
        email: email,
        password: password,
    }
    console.log(data);

    loginForm.reset();
}

loginForm.addEventListener('submit', onSubmitForm);


