$(document).ready(function() {

// Images Loaded + Masonry
var $container = $(".grid");
$container.imagesLoaded(function () {
    $container.masonry({
        columnWidth: ".grid-item",
        itemSelector: ".grid-item",
        gutter: 20
});

});

// Button scroll to top
$('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
        $('.top').addClass("active");
    } else {
        $('.top').removeClass("active");
    };
});

// Form validation
$("#form").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: false,
            digits: true
        },
        message: {
            required: true,
            minlength: 10
        }
    },
    focusCleanup: true,
    focusInvalid: false,
    errorClass: "error",
    validClass: "success"
});

// Form localization
$.extend( $.validator.messages, {
	required: "Это поле необходимо заполнить.",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	extension: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
	minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
	rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
	range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
	max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
	min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
} );

});