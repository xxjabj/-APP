window.addEventListener('load', function() {
    $('.mem-header span').eq(0).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-mes.html'
    })
    $('.mem-header span').eq(1).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-friend.html'
    })
    $('.mem-header span').eq(2).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-impor.html'
    })
    $('.mem-header span').eq(3).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-collect.html'
    })

    $('.mem-section div').on('touchstart', function() {
        location.href = 'message-friend-1.html'
    })

})