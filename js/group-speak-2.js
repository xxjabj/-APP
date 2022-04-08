window.addEventListener('load', function() {
    $('.grs2-none').click(function() {
        history.go(0)
    });
    $('.grs2-header .grs2-back').click(function() {
        history.back()
    })
    $('h4 span').click(function() {
        $(this).css('border-bottom', '0.26667vw solid #dd7d59').siblings().css('border-bottom', 'none')
        if ($(this).index() === 0) {
            $('.grs2-hot .grs2-result-1 div').css('display', 'block');
            $('.grs2-hot .grs2-result-2 div').css('display', 'none');
            $('.grs2-header input').prop('value', '')
        } else {
            $('.grs2-hot .grs2-result-1 div').css('display', 'none');
            $('.grs2-hot .grs2-result-2 div').css('display', 'block');
            $('.grs2-header input').prop('value', '小竹子')
        }
    })
    $('.grs2-hot .grs2-result-2 div').click(function() {
        location.href = 'message-friend-2.html'
    })
    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            location.href = 'special-2.html'
        }
    })
})