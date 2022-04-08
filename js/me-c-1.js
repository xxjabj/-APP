window.addEventListener('load', function() {
    var flag = true;
    $('.mec1-section div p .mec1-arrows img').on('touchstart', function() {
        if (flag) {
            $(this).prop('src', 'images/ios_我的 – 3/关闭1186@2x.png');
            flag = false
        } else {
            $(this).prop('src', 'images/ios_我的 – 3/打开1186@2x.png');
            flag = true;
        }
    })
})