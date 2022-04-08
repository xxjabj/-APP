window.addEventListener('load', function() {
    $('.grs1-none').click(function() {
        history.go(0)
    });
    $('.grs1-header .grs1-back').click(function() {
        history.back()
    })
    $('h4 span').click(function() {
        $(this).css('border-bottom', '0.26667vw solid #dd7d59').siblings().css('border-bottom', 'none')
        if ($(this).index() === 0) {
            $('.grs1-hot .grs1-result-1 div').css('display', 'block');
            $('.grs1-hot .grs1-result-2 div').css('display', 'none');
            $('.grs1-header input').prop('value', '红草')
        } else {
            $('.grs1-hot .grs1-result-1 div').css('display', 'none');
            $('.grs1-hot .grs1-result-2 div').css('display', 'block');
            $('.grs1-header input').prop('value', '')
        }
    })
    $('.grs1-hot .grs1-result-1 div').click(function() {
        toast({ time: 3000, msg: '数据库维护中...' })
    })
    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            location.href = 'special-2.html'
        }
    })
})