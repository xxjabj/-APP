window.addEventListener('load', function() {
    var re3i = 60;
    var re3timer;
    $('.re3-p3').val('重新发送(' + re3i + 's)');
    re3time()

    function re3time() {
        re3timer = setInterval(function() {
            re3i--;
            $('.re3-p3').css('color', '#ccc');
            $('.re3-p3').val('重新发送(' + re3i + 's)');
            if (re3i === 0) {
                re3i = 60;
                clearInterval(re3timer);
                $('.re3-p3').val('重新发送');
                $('.re3-p3').css('color', '#dd7d59');
                $('.re3-p3').on('touchstart', function() {
                    $('.re3-p3').off('touchstart');
                    re3i--;
                    $('.re3-p3').css('color', '#ccc');
                    $('.re3-p3').val('重新发送(' + re3i + 's)');
                    re3time()
                })
            }
        }, 1000)
    }
    // $('.re3-di1 input').prop('type', 'number');
    var re3num = 0;
    $('.re3-di1 input').on('keyup', function(e) {
        // console.log(e.keyCode);
        if (e.keyCode === 48 || e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 53 || e.keyCode === 54 || e.keyCode === 55 || e.keyCode === 56 || e.keyCode === 57) {
            $(this).next().trigger('focus');
            re3num++;
            // console.log(re3num);
            if (re3num === 6) {
                location.href = 'me-b-5.html'
            }
        }
    })
})