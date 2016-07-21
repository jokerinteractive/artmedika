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
entryBtn.addEventListener("click", function(event) {
	event.preventDefault();
	showEntry();
});

questionBtn.addEventListener("click", function(event) {
	event.preventDefault();
	showQuestion();
});

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
