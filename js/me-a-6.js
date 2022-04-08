window.addEventListener('load', function() {
    $('.mea6-react span').eq(0).on('touchstart', function() {
        // $(this).addClass('.mea6Line3Span');
        $(this).toggleClass('mea6Line3Span')
    })
    $('.mea6-react span').eq(1).on('touchstart', function() {
        $(this).css('transform', 'scale(0.9)')
    })
    $('.mea6-react span').eq(1).on('touchend', function() {
        $(this).css('transform', 'scale(1)');
        location.href = 'message-friend-3.html'
    })
    $('.mea6-react span').eq(2).on('touchstart', function() {
        $(this).css('transform', 'scale(0.9)')
    })
    $('.mea6-react span').eq(2).on('touchend', function() {
        $(this).css('transform', 'scale(1)');
        location.href = 'message-friend-2.html'
    })
    $('.mea6-section3 span').on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#333')
    })
    $('.mea6-section3 span').eq(0).on('touchstart', function() {
        $('.mea6-section4 div').css('display', 'block')
    })

    $('.mea6-section3 span').eq(1).on('touchstart', function() {
        $('.mea6-section4 div').each(function() {
            if ($(this).find('i').text() == '[草圈]') {
                $(this).css('display', 'block')
            } else {
                $(this).css('display', 'none')
            }
        })
    })
    $('.mea6-section3 span').eq(2).on('touchstart', function() {
        $('.mea6-section4 div').each(function() {
            if ($(this).find('i').text() == '[交易]') {
                $(this).css('display', 'block')
            } else {
                $(this).css('display', 'none')
            }
        })
    })
    $('.mea6-section4 div').eq(0).on('touchstart', function() {
        toast({ time: 3000, msg: '你还没权限哦' })
    })
    $('.mea6-section4 div').eq(1).on('touchstart', function() {
        toast({ time: 3000, msg: '你还没权限哦' })
    })
    $('.mea6-section4 div').eq(2).on('touchstart', function() {
        toast({ time: 3000, msg: '你还没权限哦' })
    })
    $('.mea6-section4 div').eq(3).on('touchstart', function() {
        toast({ time: 3000, msg: '你还没权限哦' })
    })
})