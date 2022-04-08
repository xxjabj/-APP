window.addEventListener('load', function() {
    $('.dep-header img:nth-child(2)').click(function() {
        toast({ time: 3000, msg: '该功能升级中...' })
    })
    $('.dep-upcontent').click(function() {
        location.href = "me-a-5.html";
    })
    var flag = true;
    $('.dep-dowcontent a:nth-child(1)').click(function(e) {
        e.preventDefault();
        var p = $(this).text();
        var i = p.length - 4;
        if (flag) {
            p = p.substr(3, i);
            p++;
            $(this).html('<img src="images/ios_草圈 – 1/收藏_点击.png" alt="">收藏(' + p + ')');
            flag = false;
        } else {
            p = p.substr(3, i);
            p--;
            $(this).html('<img src="images/ios_草圈 – 1/路径 5140@2x.png" alt="">收藏(' + p + ')');
            flag = true;
        }
    })
    $('.dep-dowcontent a:nth-child(2)').click(function(e) {
        e.preventDefault();
        var p = $(this).text();
        var i = p.length - 4;
        if (flag) {
            p = p.substr(3, i);
            p++;
            $(this).html('<img src="images/ios_草圈 – 1/爱心_点击.png" alt="">收藏(' + p + ')');
            flag = false;
        } else {
            p = p.substr(3, i);
            p--;
            $(this).html('<img src="images/ios_草圈 – 1/路径 5139@2x.png" alt="">收藏(' + p + ')');
            flag = true;
        }
    })
    $('.dep-dowcontent a:nth-child(3)').click(function(e) {
        e.preventDefault();
        toast({ time: 3000, msg: '该功能升级中...' })
    })
    $('.dep-dowcontent a:nth-child(4)').click(function(e) {
        e.preventDefault();
        $('.dep-speak').css('display', 'block');
        var num = 3;
        $('.dep-speak input').click(function() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hours = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            if ($('.dep-speak textarea').prop('value') == '') {
                toast({ time: 3000, msg: '您没有输入内容' });
                $('.dep-speak').css('display', 'none');
                return false;
            } else {
                var depRply = $('.dep-midreply-1')[0].cloneNode(true);
                var p = $("<p></p>");
                $('.dep-midreply-1:last-child').after(depRply);
                $('.dep-midreply-1:last-child .dep-reacted').html(' <p class="dep-reacted">' + (num + 1) + '楼 &nbsp; ' + year + '-' + month + '-' + date + ' &nbsp; ' + hours + ':' + min + ':' + sec + '</p>');
                $('.dep-midreply-1:last-child .dep-speakstorey').empty();
                $('.dep-midreply-1:last-child .dep-speakstorey').append(p);
                $('.dep-midreply-1:last-child .dep-speakstorey p:last-child').text($('.dep-speak textarea').prop('value'));
                $('.dep-speak textarea').prop('value', '');
                $('.dep-speak').css('display', 'none');
                num++;
                $('.dep-dowcontent a:last-child').html('<img src="images/ios_草圈 – 1/路径 5138@2x.png" alt="">回复(' + num + ')');
                $('#depeplymun').html(' <img src="images/ios_草圈 – 1/路径 4642@2x.png" alt="">223&nbsp;&nbsp;<img src="images/ios_草圈 – 1/组 982@2x.png" alt="">' + num + '')
            }
        })
    })
    $('.dep-reply .dep-upreply span').click(function() {
        $(this).css({
            "color": "#dd7d59",
            "border-bottom": "#dd7d59 solid 1px"
        }).siblings().css({
            "color": "#333333",
            "border-bottom": "none"
        })
    })
    $('.dep-reply .dep-upreply span:nth-child(1)').click(function() {
        $('.dep-midreply .dep-midreply-1').css('display', 'block')
    })
    $('.dep-reply .dep-upreply span:nth-child(2)').click(function() {
        $('.dep-midreply .dep-midreply-1').css('display', 'block')
        $('.dep-midreply .dep-midreply-1 .dep-indetify-1').each(function(k, ele) {
            // console.log(k);
            if ($(ele).text() != '楼主') {
                // console.log(k);
                $('.dep-midreply .dep-midreply-1').eq(k).css('display', 'none')
            }
        })
    })
    $('.dep-reply .dep-upreply span:nth-child(3)').click(function() {
        $('.dep-midreply .dep-midreply-1').css('display', 'block')
        $('.dep-midreply .dep-midreply-1 .dep-speakstorey').each(function(k, ele) {
            if ($(ele).children("img").length === 0) {
                $('.dep-midreply .dep-midreply-1').eq(k).css('display', 'none')
            }
        })
    })
    $('.dep-reply .dep-upreply span:nth-child(4)').click(function() {
        $('.dep-midreply .dep-midreply-1').css('display', 'block')
        $('.dep-midreply .dep-midreply-1 .dep-speakstorey').each(function(k, ele) {
            if ($(ele).find("i").length === 0) {
                $('.dep-midreply .dep-midreply-1').eq(k).css('display', 'none')
            }
        })
    })

    var i = 0;
    $(document).on('click', '.dep-reply-input', function() {
        $('.dep-speak-1').css('display', 'block');
        $('.dep-reply-input').each(function(k, ele) {
            $(ele).attr('indexed', k)
        });
        var num = $(this).attr("indexed");
        i = num;
        // console.log(num);

    })
    $(document).on('click', '.dep-speak-1 input', function() {
        // console.log(i);
        if ($('.dep-speak-1 textarea').prop('value') == '') {
            toast({ time: 3000, msg: '您没有输入内容' });
            $('.dep-speak-1').css('display', 'none');
            return false;
        } else {

            var p = $("<p></p>");
            // p.text($('.dep-speak-1 textarea').prop('value'));
            p.html('<i>水踪月：</i>' + $('.dep-speak-1 textarea').prop('value'))
            $('.dep-midreply-1').eq(i).children('.dep-speakstorey').append(p);

            $(p).css({
                'height': '10.6667vw',
                'background-color': '#f2f2f2',
                'border-radius': '2.6667vw',
                'padding-left': ' 3.4667vw',
                'line-height': ' 10.6667vw',
                'margin-top': '2.6667vw',
            })
            $('.dep-speak-1 textarea').prop('value', '');
            $('.dep-speak-1').css('display', 'none');

        }
        // console.log(i);
    })
})