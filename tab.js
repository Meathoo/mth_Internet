$(function(){
    var $div = $('#tab-title div');
    console.log("123");
    $($div. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    $('.tab-selection').eq(0).addClass("font-bold");
    $div.click(function(){
        console.log($(this).find('a'). attr ('href'));
        $($(this).find('a'). attr ('href')).show().siblings('.tab-inner').hide();
        $(this).addClass('active'). siblings ('.active').removeClass('active');
        $(this).addClass('font-bold'). siblings ('.tab-selection').removeClass('font-bold');
        $(this).addClass('bg-white'). siblings ('.tab-selection').removeClass("bg-white").addClass("bg-gray-200");
    });
});