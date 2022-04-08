window.addEventListener("load", function() {
    $('.gri-header span:eq(0)').click(function() {
        history.back()
    })
    $('.gri-inimg').click(function() {
        toast({ time: 3000, msg: '请选择图片' })
    })
    var flag = false;
    $('.gri-content span').click(function() {
        $(this).css({
            'background-color': '#dd7d59',
            'color': '#ffffff'
        }).siblings().css({
            'background-color': '#eeeeee',
            'color': '#999999'
        })
        flag = true;
    })
    $('.gri-section input:eq(1),.gri-header span:eq(1)').click(function(e) {
        e.stopPropagation();
        if ($('.gri-section input').eq(0).prop('value') == '') {
            toast({ time: 3000, msg: '请输入标题' })
        } else if ($('.gri-section textarea').prop('value') == '') {
            toast({ time: 3000, msg: '请输入内容' })
        } else if (flag != true) {
            toast({ time: 3000, msg: '请选择模块' })
        } else {
            location.href = "group-all.html"
        }

    })
})