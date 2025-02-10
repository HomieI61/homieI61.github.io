// Установка даты окончания акции


const countDownDateDS = new Date("Feb 31, 2025 23:59:59").getTime(); // Пример даты для Dark Souls
const countDownDateER = new Date("Feb 31, 2025 23:59:59").getTime(); // Пример даты для Elden Ring
const countDownDateBB = new Date("Feb 31, 2025 23:59:59").getTime();
const countDownDateSR = new Date("Feb 31, 2025 19:00:00").getTime();
// Обновление таймера каждые 1 секунду
setInterval(function () {

    // Получение текущего времени
    let now = new Date().getTime();

    // Разница между текущим временем и датой окончания акции
    let distanceDS = countDownDateDS - now;
    let distanceER = countDownDateER - now;
    let distanceBB = countDownDateBB - now;
    let distanceSR = countDownDateSR - now;

    // Вычисление дней, часов, минут и секунд
    let daysDS = Math.floor(distanceDS / (1000 * 60 * 60 * 24));
    let hoursDS = Math.floor((distanceDS % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesDS = Math.floor((distanceDS % (1000 * 60 * 60)) / (1000 * 60));
    let secondsDS = Math.floor((distanceDS % (1000 * 60)) / 1000);

    let daysER = Math.floor(distanceER / (1000 * 60 * 60 * 24));
    let hoursER = Math.floor((distanceER % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesER = Math.floor((distanceER % (1000 * 60 * 60)) / (1000 * 60));
    let secondsER = Math.floor((distanceER % (1000 * 60)) / 1000);

    let daysBB = Math.floor(distanceBB / (1000 * 60 * 60 * 24));
    let hoursBB = Math.floor((distanceBB % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesBB = Math.floor((distanceBB % (1000 * 60 * 60)) / (1000 * 60));
    let secondsBB = Math.floor((distanceBB % (1000 * 60)) / 1000);

    let daysSR = Math.floor(distanceSR / (1000 * 60 * 60 * 24));
    let hoursSR = Math.floor((distanceSR % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesSR = Math.floor((distanceSR % (1000 * 60 * 60)) / (1000 * 60));
    let secondsSR = Math.floor((distanceSR % (1000 * 60)) / 1000);

    // Заполнение значений в DOM
    document.getElementById("days").innerHTML = daysDS;
    document.getElementById("hours").innerHTML = hoursDS;
    document.getElementById("minutes").innerHTML = minutesDS;
    document.getElementById("seconds").innerHTML = secondsDS;

    document.getElementById("days2").innerHTML = daysER;
    document.getElementById("hours2").innerHTML = hoursER;
    document.getElementById("minutes2").innerHTML = minutesER;
    document.getElementById("seconds2").innerHTML = secondsER;

    document.getElementById("days3").innerHTML = daysBB;
    document.getElementById("hours3").innerHTML = hoursBB;
    document.getElementById("minutes3").innerHTML = minutesBB;
    document.getElementById("seconds3").innerHTML = secondsBB;

    document.getElementById("days4").innerHTML = daysSR;
    document.getElementById("hours4").innerHTML = hoursSR;
    document.getElementById("minutes4").innerHTML = minutesSR;
    document.getElementById("seconds4").innerHTML = secondsSR;

    // Если время истекло
    if (distanceDS < 0 || distanceER < 0) {
        clearInterval(x); // Остановка таймера
        document.getElementById("darkSoulsTimer").innerHTML = "Акция завершена!";
        document.getElementById("eldenRingTimer").innerHTML = "Акция завершена!";
    }
}, 1000);