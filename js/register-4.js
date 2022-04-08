window.addEventListener('load', function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var re4windhei = $(window).height();
    var re4buhei = $('.re4-in3').outerHeight();

    // console.log($('.toast').offset({ top: re4windhei / 2 + re4buhei }));
    $('.re4-in3').on('touchstart', function() {
        var re4in1val = $('.re4-in1').val();
        if (re4in1val == '') {
            toast({ time: 2000, msg: '请输入手机号' });
            $('.toast').offset({ top: re4windhei / 2 + re4buhei });
            return
        }
        if (regtel.test(re4in1val) == false) {
            toast({ time: 2000, msg: '手机号错误' });
            $('.toast').offset({ top: re4windhei / 2 + re4buhei });
            return
        }
        location.href = 'register-3.html'
    })
    $('.re4-p2').on('touchstart', function(e) {
        /*  e.stoppropagation(); */
        location.href = 'me-e-2.html'
    })
    $('.re4-di1 img:first-child').on('touchstart', function() {
        toast({ time: 3000, msg: '正在打开外部应用...' });
        $('.toast').offset({ top: re4windhei / 2 + re4buhei });
    })
    $('.re4-di1 img:last-child').on('touchstart', function() {
        toast({ time: 3000, msg: '正在打开外部应用...' });
        $('.toast').offset({ top: re4windhei / 2 + re4buhei });
    })
    $('.re4-p4 span:first-child').on('touchstart', function() {
        location.href = 'register-1.html'
    })
    $('.re4-p4 span:last-child').on('touchstart', function() {
        location.href = 'index.html'
    })
})