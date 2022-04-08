window.addEventListener('load', function() {
    $('.mea5-section3 span').on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#333')
    })
    $('.mea5-section3 span').eq(0).on('touchstart', function() {
        $('.mea5-section4 div').css('display', 'block')
    })

    $('.mea5-section3 span').eq(1).on('touchstart', function() {
        $('.mea5-section4 div').each(function() {
            if ($(this).find('i').text() == '[草圈]') {
                $(this).css('display', 'block')
            } else {
                $(this).css('display', 'none')
            }
        })
    })
    $('.mea5-section3 span').eq(2).on('touchstart', function() {
        $('.mea5-section4 div').each(function() {
            if ($(this).find('i').text() == '[交易]') {
                $(this).css('display', 'block')
            } else {
                $(this).css('display', 'none')
            }
        })
    })
    $('.mea5-section4 div').eq(0).on('touchstart', function() {
        location.href = 'group-particulars.html'
    })
    $('.mea5-section4 div').eq(1).on('touchstart', function() {
        location.href = 'deal-particulars.html'
    })
    $('.mea5-section4 div').eq(2).on('touchstart', function() {
        toast({ time: 3000, msg: '你还没权限哦' })
    })
    $('.mea5-section4 div').eq(3).on('touchstart', function() {
        toast({ time: 3000, msg: '你还没权限哦' })
    })
})