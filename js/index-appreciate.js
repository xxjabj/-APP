window.addEventListener('load', function() {
    $('.ina-header img:first-of-type').on('touchstart', function() {
        history.back()
    })
    $('.ina-section div img').on('touchstart', function() {
        location.href = 'index-appreciate-1.html'
    })
})