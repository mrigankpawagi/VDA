function load(time = 150, delay = 0) {
    $('#loader').delay(delay).fadeIn(time);
}
function unload(time = 150, delay = 0) {
    $('#loader').delay(delay).fadeOut(time);
}

M.AutoInit();
unload();
setTimeout(function () {
    $("li.tab a")[1].click();
}, 30)