$(function () {

  $('.product__img-box').zoom({
    url: '../images/product/17.png',
  });

  $('.filter-btn').on('click', function () {
    $('.catalogue__filters').slideToggle();
    $(this).toggleClass('filter-btn--open');
  });

  $('.filter-silent__title').on('click', function () {
    $('.filter-silent__form').slideToggle();
    $(this).toggleClass('filter__title--open');
  });

  $('.filter-sparkling__title').on('click', function () {
    $('.filter-sparkling__form').slideToggle();
    $(this).toggleClass('filter__title--open');
  });

  $('.filter-champagne__title').on('click', function () {
    $('.filter-champagne__form').slideToggle();
    $(this).toggleClass('filter__title--open');
  });

  $('.filter-volume__title').on('click', function () {
    $('.filter-volume__form').slideToggle();
    $(this).toggleClass('filter__title--open');
  });

  $('.filter-sugar__title').on('click', function () {
    $('.filter-sugar__form').slideToggle();
    $(this).toggleClass('filter__title--open');
  });

  $('.product__form-num').styler();
  $('.filter-price__input').ionRangeSlider({
    type: "double"
  });

  var scrollX = window.innerWidth - document.body.clientWidth;
  var calc = 'width: calc(100vw - ';
  var px = 'px';
  var rightBracket = ');'
  var modalWidth = calc + scrollX + px + rightBracket;
  document.querySelectorAll('.modal').forEach(modal => { modal.setAttribute('style', modalWidth) });

  var modals = document.querySelectorAll('[data-modal]');

  modals.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      var modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add('open');
      var exits = modal.querySelectorAll('.modal-exit');
      exits.forEach(function (exit) {
        exit.addEventListener('click', function (event) {
          event.preventDefault();
          modal.classList.remove('open');
        });
      });
    });
  });

  $(".star").rateYo({
    starWidth: "30px",
    normalFill: "transparent",
    ratedFill: "#EABC78",
    readOnly: true,
    starSvg: '<svg width="30px" height="30px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1.61804L17.8922 10.5193L18.0044 10.8647H18.3677H27.727L20.1552 16.366L19.8613 16.5795L19.9735 16.925L22.8657 25.8262L15.2939 20.325L15 20.1115L14.7061 20.325L7.13428 25.8262L10.0265 16.925L10.1387 16.5795L9.84482 16.366L2.27299 10.8647H11.6323H11.9956L12.1078 10.5193L15 1.61804Z" stroke="#EABC78"/></svg>'
  });

  function hoverlink() {
    document.querySelector('.menu__list-link--catalogue').classList.add('menu__list-link--catalogue-open');
    document.querySelector('.menu__list-link-box').classList.add('menu__list-link-box--open');
  }

  function unhoverlink() {
    document.querySelector('.menu__list-link--catalogue').classList.remove('menu__list-link--catalogue-open');
    document.querySelector('.menu__list-link-box').classList.remove  ('menu__list-link-box--open');
  }

  document.querySelector('.menu__list-link--catalogue').addEventListener('mouseover', hoverlink, false);
  document.querySelector('.menu__list-link--catalogue').addEventListener('mouseout', unhoverlink, false);

  

  function hoverbox() {
    document.querySelector('.menu__list-link-box').classList.add('menu__list-link-box--open');
    document.querySelector('.menu__list-link--catalogue').classList.add('menu__list-link--catalogue-open');
  }

  function unhoverbox() {
    document.querySelector('.menu__list-link-box').classList.remove('menu__list-link-box--open');
    document.querySelector('.menu__list-link--catalogue').classList.remove('menu__list-link--catalogue-open');
  }

  document.querySelector('.menu__list-link-box').addEventListener('mouseover', hoverbox, false);
  document.querySelector('.menu__list-link-box').addEventListener('mouseout', unhoverbox, false);

  var prev = '<button type="button" class="slick-prev"><svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.167 14.5833L18.7503 24.9999L29.167 35.4167" stroke="#EABC78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';

  var next = '<button type="button" class="slick-next"><svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.833 35.4167L31.2497 25.0001L20.833 14.5833" stroke="#EABC78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';

  if ($(window).width() < 769){
    $('.popular__items, .discount__items').slick({
      prevArrow: prev,
      nextArrow: next,
      infinite: false
    });
  }

  if ($(window).width() < 641){
    $('.about__items, .blog__inner').slick({
      prevArrow: prev,
      nextArrow: next,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  if ($(window).width() < 501) {
    document.querySelector('.menu__list-link--catalogue').removeAttribute('href');
    document.querySelector('.menu__list-link--catalogue').removeEventListener('mouseover', hoverlink, false);
    document.querySelector('.menu__list-link--catalogue').removeEventListener('mouseout', unhoverlink, false);

    document.querySelector('.menu__list-link-box').removeEventListener('mouseover', hoverbox, false);
    document.querySelector('.menu__list-link-box').removeEventListener('mouseout', unhoverbox, false);

    $('.menu__list-link--catalogue').on('click', function () {
      $(this).toggleClass('menu__list-link--catalogue-open');
      $('.menu__list-link-box').toggleClass('menu__list-link-box--open');
    });
  }

  $('.header__btn').on('click', function () {
    $('.menu-header').toggleClass('menu-header--open');
    $(this).toggleClass('header__btn--open');
  });

  $('.jq-number__spin.plus').on('click', function () {
    var num = $('input.product__form-num').attr('value');
    var nums = Number(num);
    var numses = nums + 1;
    $('input.product__form-num').attr('value', numses);
    if (numses > 9) {
      $('.jq-number__field').addClass('jq-number__field--two-digit');
    }
  });
  $('.jq-number__spin.minus').on('click', function () {
    var num = $('input.product__form-num').attr('value');
    var nums = Number(num);
    var numses = nums - 1;
    $('input.product__form-num').attr('value', numses);
    if (numses < 10) {
      $('.jq-number__field').removeClass('jq-number__field--two-digit');
      if (numses < 2) {
        var min = $('input.product__form-num').attr('min');
        var num = $('input.product__form-num').attr('value', min);
      }
    }
  });


  // begin of timer

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
  var futuredate = month + space + day + space + year;


  var endtime = futuredate;
  // var endtime = document.querySelector('.promo__clock').getAttribute('data-time');
  document.querySelector('.promo__clock').setAttribute('data-time', futuredate);

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
    let timer = document.getElementById('promo__clock'),
      hours = timer.querySelector('.promo__hours'),
      minutes = timer.querySelector('.promo__minutes'),
      seconds = timer.querySelector('.promo__seconds'),
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
      document.querySelector('.promo__hours-text').textContent = correctHours;

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
      document.querySelector('.promo__minutes-text').textContent = correctMinutes;

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
      document.querySelector('.promo__seconds-text').textContent = correctSeconds;
    }
  }
  setTime('timer', endtime);

  // the timer's end
});