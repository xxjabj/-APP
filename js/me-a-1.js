window.addEventListener('load', function() {
    $('.mea1-section .mea1-figure').on('touchstart', function() {
            toast({ time: 3000, msg: '请选择图片...' })
        })
        // mea1-pet
    $('.mea1-section div .mea1-pet').on('touchstart', function() {
        $('.mea1-speak-1').css('display', 'block').siblings('form').css('display', 'none')
    })
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regbri = /^(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
    $('.mea1-speak-1 input').on('touchstart', function() {
            var mea1Textarea = $('.mea1-speak-1 textarea').prop('value');
            if (regnc.test(mea1Textarea)) {
                // console.log(mea1Textarea);
                $('.mea1-pet .mea1-arrows').html('' + mea1Textarea + '<img src="images/ios_我的/我的@2x.png" alt="">');
            } else {
                toast({ time: 5000, msg: '请输入2~8位中文' })
            }
            $('.mea1-speak-1 textarea').prop('value', '');
            $('.mea1-speak-1').css('display', 'none');
        })
        // mea1-sign
    $('.mea1-section div .mea1-sign').on('touchstart', function() {
        $('.mea1-speak-2').css('display', 'block').siblings('form').css('display', 'none')
    })
    $('.mea1-speak-2 input').on('touchstart', function() {
            var mea1Textarea = $('.mea1-speak-2 textarea').prop('value');
            // console.log(mea1Textarea);
            $('.mea1-sign .mea1-arrows').html('' + mea1Textarea + '<img src="images/ios_我的/我的@2x.png" alt="">');
            $('.mea1-speak-2 textarea').prop('value', '');
            $('.mea1-speak-2').css('display', 'none');
        })
        // mea1-lev
    $('.mea1-section div .mea1-lev').on('touchstart', function() {
            location.href = 'me-a-4.html'
        })
        // mea1-bri
    $('.mea1-section div .mea1-bri').on('touchstart', function() {
        $('.mea1-speak-3').css('display', 'block').siblings('form').css('display', 'none')
    })
    $('.mea1-speak-3 input').on('touchstart', function() {
            var mea1Textarea = $('.mea1-speak-3 textarea').prop('value');
            if (regbri.test(mea1Textarea)) {
                // console.log(mea1Textarea);
                $('.mea1-bri .mea1-arrows').html('' + mea1Textarea + '<img src="images/ios_我的/我的@2x.png" alt="">');
            } else {
                toast({ time: 5000, msg: '请以\'1-1\'格式正确输入' })
            }
            $('.mea1-speak-3 textarea').prop('value', '');
            $('.mea1-speak-3').css('display', 'none');
        })
        // mea1-sex
    $('.mea1-section div .mea1-sex').on('touchstart', function() {
        $('.mea1-speak-4').css('display', 'block').siblings('form').css('display', 'none')
    })
    $('.mea1-speak-4 select').on('change', function() {
            var mea1Textarea = $(this).prop('value');
            // console.log(mea1Textarea);
            $('.mea1-sex .mea1-arrows').html('' + mea1Textarea + '<img src="images/ios_我的/我的@2x.png" alt="">');
            $('.mea1-speak-4').css('display', 'none');
        })
        // mea1 - city 用的picker插件
        // mea1-private
    $('.mea1-section div .mea1-private').on('touchstart', function() {
        location.href = 'me-a-5.html'
    })
})