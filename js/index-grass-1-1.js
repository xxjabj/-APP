window.addEventListener('load', function() {
    /* $('.ing1-1-header div:last-child img:first-of-type').on('touchstart', function() {
        history.back()
    }) */
    $('.ing1-1-header div:last-child img:last-of-type').on('touchstart', function() {
        toast({ time: 3000, msg: '该功能升级中...' })
    })
})