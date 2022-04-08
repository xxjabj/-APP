window.addEventListener('load', function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    $('.meb2-section input:last-child').on('touchstart', function() {
        var meb2Tel = $('.meb2-section input:first-child').prop('value');
        console.log(meb2Tel);
        if (regtel.test(meb2Tel)) {
            location.href = 'register-3.html'
        } else {
            toast({ time: 2000, msg: '请输入正确格式' })
        }
    })
})