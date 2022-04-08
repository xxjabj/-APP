window.addEventListener('load', function() {
    $('.mef3-section .mef3cancel').on('touchstart', function() {
        history.back()
    })
    $('.mef3-section .mef3confirm').on('touchstart', function() {
        var mef3areatop = $('.mef3-section textarea').offset().top;
        var mef3areaheight = $('.mef3-section textarea').outerHeight();
        if ($('.mef3-section textarea').val() == '') {
            toast({ time: 2000, msg: '请输入请求信息' })
                // console.log(mef3areatop + mef3areaheight / 2);
            $('.toast').offset({ top: mef3areatop + mef3areaheight / 2 })
        } else {
            location.href = 'me-b-5.html'
        }

    })
})