$(document).ready(function() {
    $("#div1").click(function() {
        $("#div2").slideToggle();
    });
    $("#div3").click(function() {
        $("#div4").slideToggle();

    });
    $("#div5").click(function() {
        $("div6").slideToggle();
    });

    $('#scrollToTop a').click(function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

     $('img').click(function(){
     	var src = $(this).attr('src');
        $('.modal').modal('show');
        $('#popup-img').attr ('src', src);



    });

});