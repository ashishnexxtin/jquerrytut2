$(document).ready(function() {
    $("#div1").click(function() {
        $("#div2").slideToggle();
    });
    $("#div3").click(function() {
        $("#div4").slideToggle();

    });
    $("#div5").click(function() {
        $("#div6").slideToggle();
    });


    $('.popup').click(function() {
        var src = $(this).attr('src');
        $('.modal').modal('show');
        $('#popup-img').attr('src', src);
    });

    $('.chat-header').click(function() {
    	$('.chat-box').slideToggle();



    });



});