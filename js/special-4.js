window.addEventListener('load', function() {
    $('.sp4-2').on('touchstart', function() {
        history.go(0)
    });
    $('.sp4-3').on('touchstart', function() {
        history.back()
    })
})