$('#announce').click(function(){
    $('.tap-target').tapTarget('open');
    $('#announce').removeClass('pulse');
});

/* $.ajax({
    type:'POST',
    url: '',
    success: function(r){

    }
}); */

$("#selectCities a.btn-small").click(function(){
    $(this).toggleClass("selected");
});