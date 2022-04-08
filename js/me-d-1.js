window.addEventListener('load', function() {
    $('.med1-input2').on('touchstart', function() {
        // console.log($('.med1-radio:checked').length);
        if ($('.med1-radio:checked').length === 1) {
            if ($('.med1-section textarea').prop('value') == '') {
                toast({ time: 2000, msg: '您还没输入内容' })
            } else if ($('.med1-section textarea').prop('value').length < 10) {
                toast({ time: 2000, msg: '您的字数不够哦' })
            } else {
                location.href = 'me-b-5.html'
            }
        } else {
            toast({ time: 2000, msg: '请选择反馈类型' })
        }
    })
})