window.addEventListener('load', function() {
    $('.ina1-header div:last-child img:first-of-type').on('touchstart', function() {
        history.back()
    })
    $('.ina1-section div:nth-child(n+2) img').on('touchstart', function() {
        location.href = 'index-appreciate-1-1.html'
    })
})