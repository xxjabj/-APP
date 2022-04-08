window.addEventListener('load', function() {
    $('.re1-p1 span').eq(0).on('touchstart', function() {
        location.href = 'register-1.html'
    })
    $('.re1-p1 span').eq(1).on('touchstart', function() {
        location.href = 'register-2.html'
    })
    var regemai = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    $('.re1-in3').on('touchstart', function() {
        var re1in1val = $('.re1-in1').val();
        var re1in2val = $('.re1-in2').val();
        if (re1in1val == '') {
            toast({ time: 2000, msg: '请输入账号' });
            return
        }
        if (regtel.test(re1in1val) == false && regemai.test(re1in1val) == false) {
            toast({ time: 2000, msg: '账号错误' });
            return
        }
        if (re1in2val == '') {
            toast({ time: 2000, msg: '请输入密码' });
            return
        }
        if (regpwd.test(re1in2val) == false) {
            toast({ time: 2000, msg: '密码错误' });
            return
        }
        location.href = 'index.html'
    })
    $('.re1-p2').on('touchstart', function() {
        location.href = 'register-2.html'
    })
    $('.re1-di1 img:first-child').on('touchstart', function() {
        toast({ time: 3000, msg: '正在打开外部应用...' });
    })
    $('.re1-di1 img:last-child').on('touchstart', function() {
        toast({ time: 3000, msg: '正在打开外部应用...' });
    })
    $('.re1-p4 span:first-child').on('touchstart', function() {
        location.href = 'register-4.html'
    })
    $('.re1-p4 span:last-child').on('touchstart', function() {
        location.href = 'index.html'
    })
})