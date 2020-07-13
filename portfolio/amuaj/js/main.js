// скролл по якорям
// Переменная должна содержать название класса или идентификатора, обертки нашего меню.

var menu_selector = ".top-menu"; 
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 

// Плавный переход по навигации

	$(function() {

	$(window).scroll(function() {

	if($(this).scrollTop() != 0) {

	$('#toTop').fadeIn();

	} else {

	$('#toTop').fadeOut();

	}

	});

	$('#toTop').click(function() {

	$('body,html').animate({scrollTop:0},800);

	});

	});

     $(document).ready(function(){
        $("#navigation").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });

     $(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});


// page init
jQuery(function(){
	jQuery('.burger').clickClass({
		classAdd: 'menu-opened',
		addToParent: true
	});
});

/*
 * Add class plugin
 */
jQuery.fn.clickClass = function(opt) {
	var options = jQuery.extend({
		classAdd: 'add-class',
		addToParent: false,
		event: 'click'
	}, opt);

	return this.each(function() {
		var classItem = jQuery(this);
		if(options.addToParent) {
			if(typeof options.addToParent === 'boolean') {
				classItem = classItem.parent();
			} else {
				classItem = classItem.parents('.' + options.addToParent);
			}
		}
		jQuery(this).bind(options.event, function(e) {
			classItem.toggleClass(options.classAdd);
			e.preventDefault();
			return false;
		});
	});
};

function AjaxFormRequest(result_id,formMain,url) {
            jQuery.ajax({
                url:     url,
                type:     "POST",
                dataType: "html",
                data: jQuery("#"+formMain).serialize(), 
                success: function(response) {
                document.getElementById(result_id).innerHTML = response;
            },
            error: function(response) {
            document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
            }
         });

         $(':input','form')
				.not(':button, :submit, :reset, :hidden')
				.val('')
				.removeAttr('checked')
				.removeAttr('selected')
                .prop('checked', false);
				
}

$(document).ready(function(){
    $('.slider').bxSlider({
        infiniteLoop: false,
    });
});

$(document).ready(function(){
    $('.slider-2').bxSlider({
        infiniteLoop: false,
    });
});

$(document).ready(function(){
    $('.slider-1').bxSlider({
        infiniteLoop: false,
    });
});

$('.box-mini').on('click', function(){
    $(this).find(".box-gallery").css('transform', 'scale(1)');
    return false;
}); 

$('.box-close').on('click', function(){
    $('.box-gallery').css('transform', 'scale(0)');
    return false;
}); 

$(function(){
    $('.top-menu li a').click(function(){
        $('.navigation').removeClass('menu-opened');
    });
});

// sticky header

$(document).ready(function(){
    $(".top-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-85}, 1000);
    });
}); 

// Кнопка Читать далее 

$("section .hide").click(function(){
    $(this).toggleClass("hide-open");
    $(this.parentNode.querySelector(".hide-text")).slideToggle();
    });

// Плавная прокрутка до якоря при переходе на другую страницу

var myHash = location.hash; //получаем значение хеша
    location.hash = ''; //очищаем хеш
    if(myHash[1] != undefined){ //проверяем, есть ли в хеше какое-то значение
        $('html, body').animate({scrollTop: $(myHash).offset().top-2765}, 2000); //скроллим за полсекунды
    };


// slider

// $('.slider-1').bxSlider({
//     adaptiveHeight: true,
//     mode: 'fade'
//     });

// pop-up

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    /*var btn = document.getElementById("myBtn");*/
    var btn = document.getElementsByClassName("myBtn");




    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close2")[0];

    // When the user clicks the button, open the modal 

    for (var i = 0, cnt = btn.length; i < cnt; i++) {
        btn[i].onclick = function() {
        modal.style.transform = "scale(1)";
    }
    }


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.transform = "scale(0)";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.transform = "scale(0)";
        }
    }

    function openCity(evt, cityName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " w3-red";
    }


