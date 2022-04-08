window.addEventListener('load', function() {
    $('header[class$="header"] img:last-child').off('click')
    var topWin = window.top.document.getElementById("topNav").contentWindow;
    var more1 = topWin.document.getElementById("more1");
    var flag = true;
    $('header[class$="header"] div img:last-child').click(function() {
        if (flag) {
            more1.style.display = "block"
            flag = false
            $('iframe').css('z-index', 998);
        } else {
            more1.style.display = "none"
            flag = true
            $('iframe').css('z-index', -1);
        }
    })
    more1.children[0].onclick = function() {
        location.href = "group-speak-2.html"
    }
    more1.children[1].onclick = function() {
        location.href = "message-friend.html"
    }
    more1.children[2].onclick = function() {
        $('.mef1-section').empty();
        $('.mef1-date').empty()
    }
    more1.children[3].onclick = function() {
        toast({ time: 2000, msg: '已加入黑名单' });
        location.href = "message-friend.html"
    }

    $('.mef1-talk span:nth-of-type(1)').on('touchstart', function() {
        toast({ time: 2000, msg: '该功能升级中...' })
    })
    $('.mef1-talk span:nth-of-type(2)').on('touchstart', function() {
        toast({ time: 2000, msg: '从相册选择图片...' })
    })

    window.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            var mef1iputtext = $('.mef1-talk input').prop('value');
            var mef1div = $('<div></div>');
            $('.mef1-section').append(mef1div);
            mef1div.html('<span>' + mef1iputtext + '</span><img src="upload/ios_主页/mmexport1616436013652(1)@2x.png" alt="">');
            mef1div.css({
                'text-align': 'right'
            })
            mef1div.children('span').css({
                'background-color': '#dd7d59',
            })
            mef1div.children('img').css({
                'margin-left': '2.1333vw',
                'margin-bottom': '1.0667vw',
                'width': '8.8vw'
            })
            mef1div.children('.mef1meimg').css({
                'height': '14.6667vw',
            })

            // mef1iputtext = '';
            $('.mef1-talk input').val('');

            // console.log(mef1iputtext);
            if (mef1iputtext == '') {
                mef1div.children('span').css({
                    'background-color': '#fff',
                })
            }
            var widHeig = $(window).height();
            var mef1sechig = $('.mef1-section').outerHeight();
            var mef1talk = $('.mef1-talk').outerHeight();
            var mef1DivLast = $('.mef1-section div:last-child').outerHeight(true);
            console.log(widHeig);
            console.log(mef1DivLast);
            if (mef1sechig >= widHeig - mef1talk) {
                window.scroll(0, mef1sechig + mef1DivLast)
            }
        }
    })

})