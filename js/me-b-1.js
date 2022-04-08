window.addEventListener('load', function() {
    $('.meb1-section div p').eq(0).on('touchstart', function() {
        location.href = 'me-b-2.html'
    })
    $('.meb1-section div p').eq(1).on('touchstart', function() {
        toast({ time: 2000, msg: '正在打开外部应用...' })
        setTimeout(function() {
            toast({ time: 1000, msg: '请求失败！' })
        }, 2000)
    })
    $('.meb1-section div p').eq(2).on('touchstart', function() {
        toast({ time: 2000, msg: '正在打开外部应用...' })
        setTimeout(function() {
            toast({ time: 1000, msg: '请求失败！' })
        }, 2000)
    })
    $('.meb1-section div p').eq(3).on('touchstart', function() {
        location.href = 'me-b-3.html'
    })
    $('.meb1-section div p').eq(4).on('touchstart', function() {
        location.href = 'me-b-4.html'
    })
})