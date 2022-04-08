window.addEventListener('load', function() {
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    $('.meb4-section input:last-child').on('touchstart', function() {
        var meb4Pwdo = $('.meb4-section input:first-child').prop('value');
        var meb4Pwdn1 = $('.meb4-section input:nth-child(2)').prop('value');
        var meb4Pwdn2 = $('.meb4-section input:nth-child(3)').prop('value');
        if (meb4Pwdo == '') {
            toast({ time: 2000, msg: '请输入原密码' })
        } else if (regpwd.test(meb4Pwdo) == false) {
            toast({ time: 4000, msg: '原密码由6-16位字母或数字组成' })
        } else if (meb4Pwdo == '123456') {
            toast({ time: 2000, msg: '原密码错误！' })
        } else if (meb4Pwdn1 == '') {
            toast({ time: 2000, msg: '请设置新密码' })
        } else if (regpwd.test(meb4Pwdn1) == false) {
            toast({ time: 3000, msg: '请设置6-16位字母或数字' })
        } else if (meb4Pwdn1 == meb4Pwdo) {
            toast({ time: 3000, msg: '请不要与原密码相同' })
        } else if (meb4Pwdn2 != meb4Pwdn1) {
            toast({ time: 2000, msg: '二次密码输入不一致' });
        } else {
            location.href = 'me-b-5.html'
        }
    })
})