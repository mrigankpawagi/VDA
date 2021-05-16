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
            $("#legends").html('');
            for(var k = 0; k < selected.length; k++){
                points.push(markers[selected[k] - 1]);
                $("#legends").append('<br><span><i class="material-icons" style="color:' + markers[selected[k] - 1].color + '">circle</i> City '+ (+k + 1) +'</span>');
            }
            createMaps(points);
            $("#resultsModal").modal('open');
            $('#selectCities a.btn-small').removeClass('selected');
            unload();
        }, 1000);
    }
});

$("a.pageBtn").click(function(){
    $("li a[href='" + $(this).attr('href') + "']")[0].click();
});