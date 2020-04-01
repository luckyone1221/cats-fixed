"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	} // /mobileMenu

};

function eventHandler() {
	// полифил для object-fit
	//objectFitImages();
	// Picture element HTML5 shiv
	//document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.mobileMenu(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	//$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/screen.jpg);"></div>');
	// /добавляет подложку для pixel perfect
	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню
		// конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .menu-mobile__link, .footer-menu-item-link, .ancor-js ").click(function () {
		//.top-nav li a, .scroll-link
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	}); // modal window

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} //cutom code
	//dogs-slider


	var dogsSlider = new Swiper('.dogs-slider-swiper-cont', {
		// Optional parameters
		loop: true,
		breakpoints: {
			2810: {
				spaceBetween: 48,
				slidesPerView: 4
			},
			1200: {
				spaceBetween: 15,
				slidesPerView: 4
			},
			992: {
				spaceBetween: 15,
				slidesPerView: 3
			},
			768: {
				spaceBetween: 10,
				slidesPerView: 3
			},
			576: {
				spaceBetween: 10,
				slidesPerView: 2
			}
		},
		lazy: {
			loadPrevNext: true
		},
		// Navigation arrows
		navigation: {
			nextEl: '.dogs-swiper-next',
			prevEl: '.dogs-swiper-prev'
		}
	}); //cats slider

	var CatsSlider = new Swiper('.cats-slider-cont', {
		// Optional parameters
		loop: true,
		breakpoints: {
			2810: {
				spaceBetween: 48,
				slidesPerView: 4
			},
			1200: {
				spaceBetween: 15,
				slidesPerView: 4
			},
			992: {
				spaceBetween: 15,
				slidesPerView: 3
			},
			768: {
				spaceBetween: 10,
				slidesPerView: 3
			},
			576: {
				spaceBetween: 10,
				slidesPerView: 2
			}
		},
		lazy: {
			loadPrevNext: true
		},
		// Navigation arrows
		navigation: {
			nextEl: '.cats-swiper-next',
			prevEl: '.cats-swiper-prev'
		}
	}); // wrap some el in spans

	function wrapFirstWordinSpan(elementsSelectorsArr) {
		var _iterator = _createForOfIteratorHelper(elementsSelectorsArr),
				_step;

		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var selector = _step.value;
				$(selector).each(function () {
					var amountofWords = this.getAttribute('data-wrap-words');
					var innerWords = this.innerHTML.split(' ');
					var slicedWords = innerWords.splice(0, amountofWords);
					var wordsInSpan = '<span class="d-block">' + slicedWords.join(' ') + '</span>';
					this.innerHTML = wordsInSpan + innerWords.join(' ');
				});
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	}

	;
	wrapFirstWordinSpan(['.s-cats-slider .taste-txt']); //$(window).resize();

	function changeSymbForSpace(elementsSelectorsArr) {
		var _iterator2 = _createForOfIteratorHelper(elementsSelectorsArr),
				_step2;

		try {
			for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
				var selector = _step2.value;
				$(selector).each(function () {
					var innerHTML = this.innerHTML;
					console.log(innerHTML);
				});
			}
		} catch (err) {
			_iterator2.e(err);
		} finally {
			_iterator2.f();
		}
	}

	;
	changeSymbForSpace(['']);
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}