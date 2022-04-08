window.addEventListener('load', function() {
    $('.grp-header img:nth-child(2)').click(function() {
        toast({ time: 3000, msg: '该功能升级中...' })
    })
    $('.grp-upcontent').click(function() {
        location.href = "me-a-5.html";
    })
    var flag = true;
    $('.grp-dowcontent a:nth-child(1)').click(function(e) {
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
    $('.grp-dowcontent a:nth-child(2)').click(function(e) {
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
    $('.grp-dowcontent a:nth-child(3)').click(function(e) {
        e.preventDefault();
        toast({ time: 3000, msg: '该功能升级中...' })
    })
    $('.grp-dowcontent a:nth-child(4)').click(function(e) {
        e.preventDefault();
        $('.grp-speak').css('display', 'block');
        var num = 5;
        $('.grp-speak input').click(function() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hours = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            if ($('.grp-speak textarea').prop('value') == '') {
                toast({ time: 3000, msg: '您没有输入内容...' });
                $('.grp-speak').css('display', 'none');
                return false;
            } else {
                var grpRply = $('.grp-midreply-1')[0].cloneNode(true);
                var p = $("<p></p>");
                $('.grp-midreply-1:last-child').after(grpRply);
                $('.grp-midreply-1:last-child .grp-reacted').html(' <p class="grp-reacted">' + (num + 1) + '楼 &nbsp; ' + year + '-' + month + '-' + date + ' &nbsp; ' + hours + ':' + min + ':' + sec + '</p>');
                $('.grp-midreply-1:last-child .grp-speakstorey').empty();
                $('.grp-midreply-1:last-child .grp-speakstorey').append(p);
                $('.grp-midreply-1:last-child .grp-speakstorey p:last-child').text($('.grp-speak textarea').prop('value'));
                $('.grp-speak textarea').prop('value', '');
                $('.grp-speak').css('display', 'none');
                num++;
                $('.grp-dowcontent a:last-child').html('<img src="images/ios_草圈 – 1/路径 5138@2x.png" alt="">回复(' + num + ')');
                $('#grpeplymun').html(' <img src="images/ios_草圈 – 1/路径 4642@2x.png" alt="">223&nbsp;&nbsp;<img src="images/ios_草圈 – 1/组 982@2x.png" alt="">' + num + '')
            }
        })
    })
    $('.grp-reply .grp-upreply span').click(function() {
        $(this).css({
            "color": "#dd7d59",
            "border-bottom": "#dd7d59 solid 1px"
        }).siblings().css({
            "color": "#333333",
            "border-bottom": "none"
        })
    })
    $('.grp-reply .grp-upreply span:nth-child(1)').click(function() {
        $('.grp-midreply .grp-midreply-1').css('display', 'block')
    })
    $('.grp-reply .grp-upreply span:nth-child(2)').click(function() {
        $('.grp-midreply .grp-midreply-1').css('display', 'block')
        $('.grp-midreply .grp-midreply-1 .grp-indetify-1,.grp-indetify-2').each(function(k, ele) {
            // console.log(k);
            if ($(ele).text() != '楼主') {
                // console.log(k);
                $('.grp-midreply .grp-midreply-1').eq(k).css('display', 'none')
            }
        })
    })
    $('.grp-reply .grp-upreply span:nth-child(3)').click(function() {
        $('.grp-midreply .grp-midreply-1').css('display', 'block')
        $('.grp-midreply .grp-midreply-1 .grp-speakstorey').each(function(k, ele) {
            if ($(ele).children("img").length === 0) {
                $('.grp-midreply .grp-midreply-1').eq(k).css('display', 'none')
            }
        })
    })
    $('.grp-reply .grp-upreply span:nth-child(4)').click(function() {
        $('.grp-midreply .grp-midreply-1').css('display', 'block')
        $('.grp-midreply .grp-midreply-1 .grp-speakstorey').each(function(k, ele) {
            if ($(ele).find("i").length === 0) {
                $('.grp-midreply .grp-midreply-1').eq(k).css('display', 'none')
            }
        })
    })

    var i = 0;
    $(document).on('click', '.grp-reply-input', function() {
        $('.grp-speak-1').css('display', 'block');
        $('.grp-reply-input').each(function(k, ele) {
            $(ele).attr('indexed', k)
        });
        var num = $(this).attr("indexed");
        i = num;
        // console.log(num);

    })
    $(document).on('click', '.grp-speak-1 input', function() {
        // console.log(i);
        if ($('.grp-speak-1 textarea').prop('value') == '') {
            toast({ time: 3000, msg: '您没有输入内容...' });
            $('.grp-speak-1').css('display', 'none');
            return false;
        } else {

            var p = $("<p></p>");
            // p.text($('.grp-speak-1 textarea').prop('value'));
            p.html('<i>水踪月：</i>' + $('.grp-speak-1 textarea').prop('value'))
            $('.grp-midreply-1').eq(i).children('.grp-speakstorey').append(p);

            $(p).css({
                'height': '10.6667vw',
                'background-color': '#f2f2f2',
                'border-radius': '2.6667vw',
                'padding-left': ' 3.4667vw',
                'line-height': ' 10.6667vw',
                'margin-top': '2.6667vw',
            })
            $('.grp-speak-1 textarea').prop('value', '');
            $('.grp-speak-1').css('display', 'none');

        }
        // console.log(i);
    })
})