window.addEventListener('load', function() {
    $('.inf1-1-header div:last-child img:last-of-type').on('touchstart', function() {
        toast({ time: 3000, msg: '该功能升级中...' })
    })
})