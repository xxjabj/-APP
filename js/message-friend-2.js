window.addEventListener('load', function() {
    $('.mef2-section .mef2cancel').on('touchstart', function() {
        history.back()
    })
    $('.mef2-section .mef2confirm').on('touchstart', function() {
        var mef2areatop = $('.mef2-section textarea').offset().top;
        var mef2areaheight = $('.mef2-section textarea').outerHeight();
        if ($('.mef2-section textarea').val() == '') {
            toast({ time: 2000, msg: '请输入请求信息' })
                // console.log(mef2areatop + mef2areaheight / 2);
            $('.toast').offset({ top: mef2areatop + mef2areaheight / 2 })
        } else {
            location.href = 'me-b-5.html'
        }

    })
})