var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
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
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});


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
				.removeAttr('selected');
				
}