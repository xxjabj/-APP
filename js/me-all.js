window.addEventListener('load', function() {
    $('.mea-section div').eq(0).on('touchstart', function() {
        location.href = 'me-a-1.html'
    })
    $('.mea-section div').find('p').eq(0).on('touchstart', function() {
        location.href = 'me-b-1.html'
    })

    $('.mea-section div').find('p').eq(1).on('touchstart', function() {
        location.href = 'me-c-1.html'
    })
    $('.mea-section div').find('p').eq(2).on('touchstart', function() {
        toast({ time: 1500, msg: '清理中...' });
        window.setTimeout(function() {
            $('.mea-section div').find('p').children('i').text('0MB')
        }, 1500)

    })
    $('.mea-section div').find('p').eq(3).on('touchstart', function() {
        location.href = 'me-d-1.html'
    })
    $('.mea-section div').find('p').eq(4).on('touchstart', function() {
        location.href = 'me-e-1.html'
    })
    $('.mea-section div').find('p').eq(5).on('touchstart', function() {
        location.href = 'special-1.html'
    })
})