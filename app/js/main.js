$(function () {
  
  var href = $('.zoomImg').attr('src');

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
        document.addEventListener('keydown', function (e) {
          if (e.keyCode === 27) {
            modal.classList.remove('open');
          }
        });
      });
    });
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double"
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

  $('.header__btn').on('click', function () {
    $('.menu-header').toggleClass('menu-header--open');
    $(this).toggleClass('header__btn--open');
  });


  $('.filter-btn').on('click', function () {
    $('.catalogue__filters').slideToggle();
    $(this).toggleClass('filter-btn--open');
  });

  $(".star").rateYo({
    starWidth: "30px",
    normalFill: "transparent",
    ratedFill: "#EABC78",
    readOnly: true,
    starSvg: '<svg width="30px" height="30px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1.61804L17.8922 10.5193L18.0044 10.8647H18.3677H27.727L20.1552 16.366L19.8613 16.5795L19.9735 16.925L22.8657 25.8262L15.2939 20.325L15 20.1115L14.7061 20.325L7.13428 25.8262L10.0265 16.925L10.1387 16.5795L9.84482 16.366L2.27299 10.8647H11.6323H11.9956L12.1078 10.5193L15 1.61804Z" stroke="#EABC78"/></svg>'
  });

  if ($(window).width() > 499) {
    function hoverlink() {
      document.querySelector('.menu__list-link--catalogue').classList.add('menu__list-link--catalogue-open');
      document.querySelector('.menu__list-link-box').classList.add('menu__list-link-box--open');
    }

    function unhoverlink() {
      document.querySelector('.menu__list-link--catalogue').classList.remove('menu__list-link--catalogue-open');
      document.querySelector('.menu__list-link-box').classList.remove('menu__list-link-box--open');
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
  }

  var prev = '<button type="button" class="slick-prev"><svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.167 14.5833L18.7503 24.9999L29.167 35.4167" stroke="#EABC78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';

  var next = '<button type="button" class="slick-next"><svg width="50px" height="50px" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.833 35.4167L31.2497 25.0001L20.833 14.5833" stroke="#EABC78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';

  if ($(window).width() < 993) {
    $('.product__img-wrap').trigger('zoom.destroy');
    $('.product__img-wrap').attr('href', href);
    $('.product__img-wrap').attr('data-fancybox', '');
  }

  if ($(window).width() < 769) {
    $('.popular__items, .discount__items').slick({
      prevArrow: prev,
      nextArrow: next,
      infinite: false
    });
  }

  if ($(window).width() < 641) {
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

    $('.menu__list-link--catalogue').on('click', function () {
      $(this).toggleClass('menu__list-link--catalogue-open');
      $('.menu__list-link-box').toggleClass('menu__list-link-box--open');
    });
  }

  var countdown = countdownLite();
  
});