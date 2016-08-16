"use strict";

var entryBtn = document.querySelector("#entry-btn");
var questionBtn = document.querySelector("#question-btn");
var entryBtnFooter = document.querySelector("#entry-btn-footer");
var questionBtnFooter = document.querySelector("#question-btn-footer");
var reviewBtnFooter = document.querySelector("#review-btn-footer");

var overlay = document.querySelector(".modal-overlay");
var modalEntry = document.querySelector("#modal-entry");
var modalQuestion = document.querySelector("#modal-question");
var modalReview = document.querySelector("#modal-review");
var closeQuestion = document.querySelector("#modal-question-close");
var closeEntry = document.querySelector("#modal-entry-close");
var closeRewiew = document.querySelector("#modal-review-close");

//Функции, показывающие попап
function showEntry() {
	overlay.classList.add("modal-overlay--show");
	modalEntry.classList.add("modal-content--show");
}

function showQuestion() {
	overlay.classList.add("modal-overlay--show");
	modalQuestion.classList.add("modal-content--show");
}

function showReview() {
	overlay.classList.add("modal-overlay--show");
	modalReview.classList.add("modal-content--show");
}

//Функция, скрывающая попап
function hideEntry() {
	modalEntry.classList.remove("modal-content--show");
	overlay.classList.remove("modal-overlay--show");
}

function hideQuestion() {
	modalQuestion.classList.remove("modal-content--show");
	overlay.classList.remove("modal-overlay--show");
}

function hideReview() {
	modalReview.classList.remove("modal-content--show");
	overlay.classList.remove("modal-overlay--show");
}

//Добавляет обработчики события кнопкам
if (entryBtn) {
	entryBtn.addEventListener("click", function(event) {
		event.preventDefault();
		showEntry();
	});
}

if (questionBtn) {
	questionBtn.addEventListener("click", function(event) {
		event.preventDefault();
		showQuestion();
	});
}

entryBtnFooter.addEventListener("click", function(event) {
	event.preventDefault();
	showEntry();
});

questionBtnFooter.addEventListener("click", function(event) {
	event.preventDefault();
	showQuestion();
});

reviewBtnFooter.addEventListener("click", function(event) {
	event.preventDefault();
	showReview();
});

//Добавляет обработчик события закрывающей кнопке
closeEntry.addEventListener("click", function(event) {
	event.preventDefault();
	hideEntry();
});

closeQuestion.addEventListener("click", function(event) {
	event.preventDefault();
	hideQuestion();
});

closeRewiew.addEventListener("click", function(event) {
	event.preventDefault();
	hideReview();
});


//Обработчик события: закрытие попапа по нажатию клавиши esc
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modalEntry.classList.contains("modal-content--show")) {
			hideEntry();
		}
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modalQuestion.classList.contains("modal-content--show")) {
			hideQuestion();
		}
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modalReview.classList.contains("modal-content--show")) {
			hideReview();
		}
	}
});

if (document.getElementsByClassName("results__item")) {
  $(".results__item").twentytwenty();

$('.results__show-photo--before').on('click', function(event) {
  event.preventDefault();
  var slider = $('.results__slider'),
      activeSlide = $('.results__list--active'),
      handle = activeSlide.find('.twentytwenty-handle'),
      leftImg = activeSlide.find('.twentytwenty-before'),
      leftPos = handle.css("left"),
      newPos = Number(leftPos.slice(0, -2)) - 5 + 'px';

  handle.css('left', newPos);
  leftImg.css('clip', 'rect(0px '+ newPos + ' 300px 0px)');
});

$('.results__show-photo--after').on('click', function(event) {
  event.preventDefault();
  var slider = $('.results__slider'),
      activeSlide = $('.results__list--active'),
      handle = activeSlide.find('.twentytwenty-handle'),
      leftImg = activeSlide.find('.twentytwenty-before'),
      leftPos = handle.css("left"),
      newPos = Number(leftPos.slice(0, -2)) + 5 + 'px';

  handle.css('left', newPos);
  leftImg.css('clip', 'rect(0px '+ newPos + ' 300px 0px)');
});
};

if (document.getElementsByClassName("results__slider")) {
  $('.results__show-slide--prew').on('click', function(event) {
    event.preventDefault();

    var slider = $('.results__slider'),
        slidesWrap = slider.find('.results__wrap'),
        slides = slidesWrap.find('results__list'),
        activeSlide = slidesWrap.find('.results__list--active'),
        slideNumber = Number(slider.find('.results__slide-number').text()),
        slideMax = Number(slider.find('.results__slide-total').text());

    if (slideNumber === 1) {
      return;
    }

    else {
      slider.find('.results__slide-number').html(slideNumber - 1);
      activeSlide.fadeOut('400', function() {
        activeSlide.removeClass('results__list--active').prev('.results__list').addClass('results__list--active').fadeIn('400');
      });
    }
  });
  $('.results__show-slide--next').on('click', function(event) {
    event.preventDefault();

    var slider = $('.results__slider'),
        slidesWrap = slider.find('.results__wrap'),
        slides = slidesWrap.find('results__list'),
        activeSlide = slidesWrap.find('.results__list--active'),
        slideNumber = Number(slider.find('.results__slide-number').text()),
        slideMax = Number(slider.find('.results__slide-total').text());

    if (slideNumber === slideMax) {
      return;
    }

    else {
      slider.find('.results__slide-number').html(slideNumber + 1);
      activeSlide.fadeOut('400', function() {
        activeSlide.removeClass('results__list--active')
        .next('.results__list')
        .addClass('results__list--active').fadeIn('400');
      });
    }
  });
};
