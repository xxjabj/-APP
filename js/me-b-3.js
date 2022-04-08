window.addEventListener('load', function() {
    var recEma = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    $('.meb3-section input:last-child').on('touchstart', function() {
        var meb3Email = $('.meb3-section input:first-child').prop('value');
        if (recEma.test(meb3Email)) {
            toast({ time: 3000, msg: '已发送，请登录邮箱验证！' })
        } else {
            toast({ time: 2000, msg: '请输入正确格式' })
        }
    })

})