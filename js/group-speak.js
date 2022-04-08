window.addEventListener('load', function() {
    $('.grs-none').click(function() {
        history.go(0)
    });
    $('.grs-header .grs-back').click(function() {
        // history.back()
        // history.pushState()
        history.go(-1)
    })
    var grsInk = [];
    $('.grs-hot .grs-content span').each(function() {
        var ink = $(this).text();
        // console.log(ink);
        grsInk.push(ink);
    })
    document.addEventListener('keyup', function(e) {
        var grsHistory = $('.grs-sercher .grs-history')[0].cloneNode(true);
        var grsValue = $('.grs-header input').prop('value');
        if (e.keyCode === 13) {
            if (grsValue == '') {
                toast({ time: 3000, msg: '请输入内容' })
            } else if (grsValue == '红草') {
                $('.grs-sercher .grs-history:first-of-type').before(grsHistory);
                $('.grs-sercher .grs-history:first-of-type p').html('<img src="images/ios_草圈 – 2/路径 4639@2x.png" alt="">红草');
                // return false;
                location.href = 'group-speak-1.html'
            } else if (grsInk.indexOf(grsValue) !== -1) {
                $('.grs-sercher .grs-history:first-of-type').before(grsHistory);
                $('.grs-sercher .grs-history:first-of-type p').html('<img src="images/ios_草圈 – 2/路径 4639@2x.png" alt="">' + $('.grs-header input').prop('value') + '（不跳转了，做个示范）');
                return false;
            } else {
                $('.grs-sercher .grs-history:first-of-type').before(grsHistory);
                $('.grs-sercher .grs-history:first-of-type p').html('<img src="images/ios_草圈 – 2/路径 4639@2x.png" alt="">' + $('.grs-header input').prop('value'));
                // return false;
                location.href = 'special-2.html'
            }
            $('.grs-header input').val('');
        }
    })

    $('.grs-hot .grs-content span').on('touchstart', function() {
        $(this).css('transform', 'scale(0.9)')
    })
    $('.grs-hot .grs-content span').on('touchend', function() {
        $(this).css('transform', 'scale(1)')
        $('.grs-header input').prop('value', $(this).text())
    })
    $('.grs-sercher div>img').on('touchstart', function() {
        $(this).parents('.grs-history').remove()
    })
    $('.grs-history:last-of-type').on('touchstart', function() {
        $(this).siblings('.grs-history').remove()
    })
})