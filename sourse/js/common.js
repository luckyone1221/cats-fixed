const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
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

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu


};

function eventHandler() {
	// полифил для object-fit
	//objectFitImages();
	// Picture element HTML5 shiv
	//document.createElement("picture");
	// для свг
	svg4everybody({});



	JSCCommon.mobileMenu();


	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/screen.jpg);"></div>');
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

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
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

	heightses();

	// листалка по стр
	$(" .menu-mobile__link, .footer-menu-item-link, .ancor-js ").click(function () { //.top-nav li a, .scroll-link
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});
	// modal window



	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)
	}
	//cutom code

//dogs-slider
	var dogsSlider = new Swiper ('.dogs-slider-swiper-cont', {
		// Optional parameters
		loop: true,

		breakpoints: {
			2810: {
				spaceBetween: 48,
				slidesPerView: 4,
			},
			1200: {
				spaceBetween: 15,
				slidesPerView: 4,
			},
			992: {
				spaceBetween: 15,
				slidesPerView: 3,
			},
			768: {
				spaceBetween: 10,
				slidesPerView: 3,
			},
			576: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
		lazy: {
			loadPrevNext: true
		},


		// Navigation arrows
		navigation: {
			nextEl: '.dogs-swiper-next',
			prevEl: '.dogs-swiper-prev',
		},
	});

//cats slider
	var CatsSlider = new Swiper ('.cats-slider-cont', {
		// Optional parameters
		loop: true,

		breakpoints: {
			2810: {
				spaceBetween: 48,
				slidesPerView: 4,
			},
			1200: {
				spaceBetween: 15,
				slidesPerView: 4,
			},
			992: {
				spaceBetween: 15,
				slidesPerView: 3,
			},
			768: {
				spaceBetween: 10,
				slidesPerView: 3,
			},
			576: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
		lazy: {
			loadPrevNext: true
		},

		// Navigation arrows
		navigation: {
			nextEl: '.cats-swiper-next',
			prevEl: '.cats-swiper-prev',
		},
	});

// wrap some el in spans
	function wrapFirstWordinSpan(elementsSelectorsArr) {
		for (let selector of elementsSelectorsArr){
			$(selector).each(function () {
				let amountofWords = this.getAttribute('data-wrap-words');
				let innerWords = this.innerHTML.split(' ');
				let slicedWords = innerWords.splice(0,amountofWords);
				let wordsInSpan = '<span class="d-block">'+ slicedWords.join(' ') +'</span>';
				this.innerHTML = wordsInSpan + innerWords.join(' ');
			})
		}
	};

	wrapFirstWordinSpan(['.s-cats-slider .taste-txt']);

//$(window).resize();

	function changeSymbForSpace(elementsSelectorsArr) {
		for (let selector of elementsSelectorsArr){
			$(selector).each(function () {
				let innerHTML = this.innerHTML;
				console.log(innerHTML)
			});
		}
	};

	changeSymbForSpace(['']);
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

