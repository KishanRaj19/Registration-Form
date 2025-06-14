document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const user = username.value.trim();
        const mail = email.value.trim();
        const pass = password.value.trim();

        if (!user || !mail || !pass) {
            alert("Please fill in all fields!");
            return;
        }

        if (!mail.includes('@')) {
            alert("Please enter a valid email address!");
            return;
        }

        alert("Form submitted successfully!\nUsername: " + user + "\nEmail: " + mail);
        form.reset();
    });
});

// ✅ Move these OUTSIDE so HTML onclick can access them
function loginWithGoogle() {
    window.open("https://accounts.google.com/signin", "_blank");
}

function loginWithFacebook() {
    window.open("https://www.facebook.com/login", "_blank");
}
