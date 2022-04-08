window.addEventListener('load', function() {
    $('.re2-p1 span').eq(0).on('touchstart', function() {
        location.href = 'register-1.html'
    })
    $('.re2-p1 span').eq(1).on('touchstart', function() {
        location.href = 'register-2.html'
    })
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var re2windhei = $(window).height();
    var re2buhei = $('.re2-in3').outerHeight();

    // console.log($('.toast').offset({ top: re2windhei / 2 + re2buhei }));
    $('.re2-in3').on('touchstart', function() {
        var re2in1val = $('.re2-in1').val();
        if (re2in1val == '') {
            toast({ time: 2000, msg: '请输入手机号' });
            $('.toast').offset({ top: re2windhei / 2 + re2buhei });
            return
        }
        if (regtel.test(re2in1val) == false) {
            toast({ time: 2000, msg: '手机号错误' });
            $('.toast').offset({ top: re2windhei / 2 + re2buhei });
            return
        }
        location.href = 'register-3.html'
    })

    $('.re2-di1 img:first-child').on('touchstart', function() {
        toast({ time: 3000, msg: '正在打开外部应用...' });
        $('.toast').offset({ top: re2windhei / 2 + re2buhei });
    })
    $('.re2-di1 img:last-child').on('touchstart', function() {
        toast({ time: 3000, msg: '正在打开外部应用...' });
        $('.toast').offset({ top: re2windhei / 2 + re2buhei });
    })
    $('.re2-p4 span:first-child').on('touchstart', function() {
        location.href = 'register-4.html'
    })
    $('.re2-p4 span:last-child').on('touchstart', function() {
        location.href = 'index.html'
    })
})