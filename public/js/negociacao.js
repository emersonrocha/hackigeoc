$(function(){
    $('#div-negociacao div a').click(function(){
        $('#div-login').removeClass("hidden");
        $('#div-negociacao').addClass("hidden");
        $('#div-login').addClass("visible");
        // var id = $(this).attr('id');
        // alert(id);
    });

    $('#div-login div a').click(function(){
        $('#div-user').removeClass("hidden");
        $('#div-login').removeClass("visible");
        $('#div-login').addClass("hidden");
        $('#div-user').addClass("visible");
        // var id = $(this).attr('id');
        // alert(id);
    });

});