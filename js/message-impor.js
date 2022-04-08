window.addEventListener('load', function() {
    $('.mei-header span').eq(0).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-mes.html'
    })
    $('.mei-header span').eq(1).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-friend.html'
    })
    $('.mei-header span').eq(2).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-impor.html'
    })
    $('.mei-header span').eq(3).on('touchstart', function() {
        $(this).css('color', '#dd7d59').siblings().css('color', '#ffffff')
        location.href = 'message-collect.html'
    })

    $('.mei-section div').on('touchstart', function() {
        location.href = 'me-a-6.html'
    })

    $('.mei-section div p i').on('touchstart', function() {
        $(this).parents('.mei-section div').remove()
    })
})