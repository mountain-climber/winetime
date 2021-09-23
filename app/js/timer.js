var now = new Date().getDate();
var day = now + 2;
var monthnum = new Date().getMonth();
var month;

if (monthnum == 7 || 9 || 11 || 0 || 2 || 4 || 6) {
  if (now > 29) {
    day = day - 31;
    monthnum = monthnum + 1;
  }
}
else if (monthnum == 8 || 10 || 3 || 5) {
  if (now > 28) {
    day = day - 30;
    monthnum = monthnum + 1;
  }
}
else {
  if (now > 26) {
    day = day - 28;
    monthnum = monthnum + 1;
  }
}

if (monthnum == 0) {
  month = 'January';
}
if (monthnum == 1) {
  month = 'February';
}
if (monthnum == 2) {
  month = 'March';
}
if (monthnum == 3) {
  month = 'April';
}
if (monthnum == 4) {
  month = 'May';
}
if (monthnum == 5) {
  month = 'June';
}
if (monthnum == 6) {
  month = 'July';
}
if (monthnum == 7) {
  month = 'August';
}
if (monthnum == 8) {
  month = 'September';
}
if (monthnum == 9) {
  month = 'October';
}
if (monthnum == 10) {
  month = 'November';
}
if (monthnum == 11) {
  month = 'December';
}

var space = ' ';
var year = '2021, 00:00';
var endtime = month + space + day + space + year;

if (document.querySelector('.promo-clock') || document.querySelectorAll('.promo-clock').length) {

  document.querySelector('.promo-clock').setAttribute('data-time', endtime);

  // приводим к стандартному виду 03:04:05, вместо 3:4:5
  function makeCorrectDate(uncorrectDate) {
    let correctDate = uncorrectDate;
    if (uncorrectDate < 10) {
      correctDate = '0' + uncorrectDate;
    }
    return correctDate;
  }

  // сколько времени осталось
  function getDateRemaining(timesup) {
    // total = оставшееся вермя
    var total = Date.parse(timesup) - Date.now();
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)));
    // вывод объектов
    return {
      'total': total,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }


  // инициализация таймера на самом сайте
  function setTime(id, timesup) {
    let timer = document.getElementById('.promo-clock'),
      hours = timer.querySelector('.promo-clock__hours'),
      minutes = timer.querySelector('.promo-clock__minutes'),
      seconds = timer.querySelector('.promo-clock__seconds'),
      // обновление таймера каждые 1000мс
      timeInterval = setInterval(update, 1000);

    function update() {
      // результат функции getDateRemaining
      let total = getDateRemaining(timesup);
      // Проверка на ноль
      var nowdate = Date.now();
      if (nowdate <= Date.parse(endtime)) {
        var nowdate = Date.now();
        hours.textContent = makeCorrectDate(total.hours);
        minutes.textContent = makeCorrectDate(total.minutes);
        seconds.textContent = makeCorrectDate(total.seconds);
      } else {
        hours.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
      }


      // Окончания часов
      switch (total.hours) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
          correctHours = "Час";
          // console.log(total.hours, correctHours); // DEBUG
          break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
          correctHours = "Часа";
          // console.log(total.hours, correctHours); // DEBUG
          break;
        default:
          correctHours = "Часов";
        // console.log(total.hours, correctHours); // DEBUG
      }
      document.querySelector('.promo-clock__hours-text').textContent = correctHours;

      // Окончания минут
      switch (total.minutes) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
          correctMinutes = "Минута";
          // console.log(total.minutes, correctMinutes); // DEBUG
          break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
          correctMinutes = "Минуты";
          // console.log(total.minutes, correctMinutes); // DEBUG
          break;
        default:
          correctMinutes = "Минут";
        // console.log(total.minutes, correctMinutes); // DEBUG
      }
      document.querySelector('.promo-clock__minutes-text').textContent = correctMinutes;

      // Окончания секунд
      switch (total.seconds) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
          correctSeconds = "Секунда";
          // console.log(total.seconds, correctSeconds); // DEBUG
          break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
          correctSeconds = "Секунды";
          // console.log(total.seconds, correctSeconds); // DEBUG
          break;
        default:
          correctSeconds = "Секунд";
        // console.log(total.seconds, correctSeconds); // DEBUG
      }
      document.querySelector('.promo-clock__seconds-text').textContent = correctSeconds;
    }
  }

  setTime('.promo-clock', endtime);
}