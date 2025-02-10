
let scores = 0;
let btn = document.querySelector('#next');
let btn2 = document.querySelector('#next2');
let btn3 = document.querySelector('#next3');
let btn4 = document.querySelector('#next4');
let btn5 = document.querySelector('#next5');

btn.style.display = 'none';
btn2.style.display = 'none';
btn3.style.display = 'none';
btn4.style.display = 'none';
btn5.style.display = 'none';


function checkAnswer() {
    const checkboxes = document.querySelectorAll('input[name="ANSWER1"]');
    let selectedValue = null;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValue = checkbox.value;
            console.log(selectedValue)
        }
    })

    if (selectedValue === '1') {
        document.getElementById('result').innerText = 'Правильно! Вы выбрали верный ответ.';
        scores += 1;


        btn.style.display = 'inline';

        btn.addEventListener('click', function () {
            document.querySelector('.questions2').classList.add('active');
            document.querySelector('.questions.active').style.display = 'none'
        })

    } else {
        document.getElementById('result').innerText = 'Неверно!';

        btn.style.display = 'inline';

        btn.addEventListener('click', function () {
            document.querySelector('.questions2').classList.add('active');
            document.querySelector('.questions.active').style.display = 'none'
        })
    }
}



function checkAnswer2() {
    const checkboxes = document.querySelectorAll('input[name="ANSWER2"]');
    let selectedValue = null;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValue = checkbox.value;
            console.log(selectedValue)
        }
    })

    if (selectedValue === '3') {
        document.getElementById('result2').innerText = 'Правильно! Вы выбрали верный ответ.';
        scores += 1;

        btn2.style.display = 'inline';

        btn2.addEventListener('click', function () {
            document.querySelector('.questions3').classList.add('active');
            document.querySelector('.questions2').style.display = 'none'
        })

    } else {
        document.getElementById('result2').innerText = 'Неверно!';

        btn2.style.display = 'inline';

        btn2.addEventListener('click', function () {
            document.querySelector('.questions3').classList.add('active');
            document.querySelector('.questions2').style.display = 'none'
        })
    }
}


function checkAnswer3() {
    const checkboxes = document.querySelectorAll('input[name="ANSWER3"]');
    let selectedValue = null;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValue = checkbox.value;
            console.log(selectedValue)
        }
    })

    if (selectedValue === '3') {
        document.getElementById('result3').innerText = 'Правильно! Вы выбрали верный ответ.';
        scores += 1;

        btn3.style.display = 'inline';

        btn3.addEventListener('click', function () {
            document.querySelector('.questions4').classList.add('active');
            document.querySelector('.questions3').style.display = 'none'
        })
    } else {
        document.getElementById('result3').innerText = 'Неверно!';

        btn3.style.display = 'inline';

        btn3.addEventListener('click', function () {
            document.querySelector('.questions4').classList.add('active');
            document.querySelector('.questions3').style.display = 'none'
        })
    }
}


function checkAnswer4() {
    const checkboxes = document.querySelectorAll('input[name="ANSWER4"]');
    let selectedValue = null;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValue = checkbox.value;
            console.log(selectedValue)
        }
    })

    if (selectedValue === '2') {
        document.getElementById('result4').innerText = 'Правильно! Вы выбрали верный ответ.';
        scores += 1;

        btn4.style.display = 'inline';

        btn4.addEventListener('click', function () {
            document.querySelector('.questions5').classList.add('active');
            document.querySelector('.questions4').style.display = 'none'
        })
    } else {
        document.getElementById('result4').innerText = 'Неверно!';

        btn4.style.display = 'inline';

        btn4.addEventListener('click', function () {
            document.querySelector('.questions5').classList.add('active');
            document.querySelector('.questions4').style.display = 'none'
        })
    }
}


function checkAnswer5() {
    const checkboxes = document.querySelectorAll('input[name="ANSWER5"]');
    let selectedValue = null;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValue = checkbox.value;
            console.log(selectedValue)
        }
    })

    if (selectedValue === '2') {
        document.getElementById('result5').innerText = 'Правильно! Вы выбрали верный ответ.';
        scores += 1;

        function allScores() {
            alert('Вы набрали ' + scores + ' Очка(ов)');
        }
        setTimeout(allScores, 2000);
    } else {
        document.getElementById('result5').innerText = 'Неверно!';

        function allScores() {
            alert('Вы набрали ' + scores + ' Очка(ов)');
        }
        setTimeout(allScores, 1000);
    }
}

