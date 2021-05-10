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

$("#continue").click(function(){
    let selected = [];
    var btns = $("#selectCities a");
    for(var i = 0; i < btns.length; i++){
        if(btns[i].classList.contains("selected"))
            selected.push(i+1);
    }
    if(selected.length > 0){
        load();
        setTimeout(function(){
            unload();
            $("#resultsModal").modal('open');
        }, 1000);
    }
});
$("#resultsModal").modal('open');

