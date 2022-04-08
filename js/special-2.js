window.addEventListener('load', function() {
    var sp2angle = 0;
    movewater = setInterval(function() {
        sp2angle += -0.1;
        $(".sp2-move").rotate(sp2angle);
    }, 5);

    setInterval(function() {
        $('.sp2-out').toggleClass('sp2color')
    }, 1000)

    setTimeout(function() {
        location.href = 'special-3.html'
    }, 6000)

})