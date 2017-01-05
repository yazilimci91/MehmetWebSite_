jQuery.noConflict();
(function( $ ) {
$(function() {


$('.switcher_btn').toggle(function () {
    $(".wpb_switcher_area").css({left: "0px"});
}, function () {
    $(".wpb_switcher_area").css({left: "-140px"});
});


});
})(jQuery);  	