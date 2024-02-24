document.getElementById('login').addEventListener('click', function () {
    const emailfield = document.getElementById('email');
    const emailid = emailfield.value;
    const passfield = document.getElementById('password');
    const password = passfield.value;
    if (emailid == 'simple@gmail.de' && password == 1234) {
        window.location.href = 'bank.html';
    }
})
