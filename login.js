let clickSpan = document.querySelector('.auth-trigger');
        let form = document.forms[0];
        let loginName = document.querySelector('.login-name');
        let auth = document.querySelector('.auth');

        clickSpan.addEventListener('click', function () {
            form.classList.toggle('active');
        })
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let login = document.querySelector('#login').value; // для input только 
            let rem = document.querySelector('#remember');

            loginName.innerHTML = 'Hey, ' + login;
            auth.style.display = 'none';

            localStorage.setItem('userName', login)

        })

        let localName = localStorage.getItem('userName');

        document.addEventListener("DOMContentLoaded", function () {
            if (localName) {
                loginName.innerHTML = "Hey, " + localName;
                auth.style.display = 'none';
            }
        })
        
        loginName.addEventListener('click', function(){

        })