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
            let points = [];
            for(var k = 0; k < selected.length; k++){
                points.push(markers[selected[k] - 1]);
            }
            createMaps(points);
            $("#resultsModal").modal('open');
            unload();
        }, 1000);
    }
});

