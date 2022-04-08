window.addEventListener('load', function() {
    window.onresize = function() {
            location.reload();
        }
        /* document.addEventListener('touchmove', function(e) {
            e.preventDefault()
        }) */
    $('footer[class$="infooter"] a:nth-child(1)').click(function() {
        location.href = "index.html"
    })
    $('footer[class$="infooter"] a:nth-child(2)').click(function() {
        location.href = "group-all.html"
    })
    $('footer[class$="infooter"] a:nth-child(3)').click(function() {
        location.href = "deal-all.html"
    })
    $('footer[class$="infooter"] a:nth-child(4)').click(function() {
        location.href = "message-mes.html"
    })
    $('footer[class$="infooter"] a:nth-child(5)').click(function() {
        location.href = "me-all.html"
    })

    $('header[class$="header"] img:nth-child(1)').click(function() {
        history.back()
    })
    var topWin = window.top.document.getElementById("topNav").contentWindow;
    var more2 = topWin.document.getElementById("more2");
    var flag = true;
    $('header[class$="header"] img:last-child').click(function() {
        if (flag) {
            more2.style.display = "block"
            flag = false
            $('iframe').css('z-index', 998);
        } else {
            more2.style.display = "none"
            flag = true
            $('iframe').css('z-index', -1);
        }
    })
    more2.children[0].onclick = function() {
        location.href = "index.html"
    }
    more2.children[1].onclick = function() {
        location.href = "message-mes.html"
    }
    more2.children[2].onclick = function() {
        location.href = "me-c-1.html"
    }
    more2.children[3].onclick = function() {
        location.href = "me-e-3.html"
    }
})