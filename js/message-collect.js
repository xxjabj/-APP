window.addEventListener('load', function() {
    $('.mec-header span').eq(0).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-mes.html'
    })
    $('.mec-header span').eq(1).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-friend.html'
    })
    $('.mec-header span').eq(2).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-impor.html'
    })
    $('.mec-header span').eq(3).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-collect.html'
    })

    $('.mec-section div').on('touchstart', function() {
        toast({ time: 2000, msg: '数据维护中...' })
    })

    $('.mec-section div p i').on('touchstart', function() {
        $(this).parents('.mec-section div').remove()
    })
})