window.addEventListener('load', function() {
    $(".dea-midcontent").click(function() {
        location.href = "deal-particulars.html"
    })
    $(".dea-section .dea-title p:eq(0) span:nth-child(n+2)").click(function() {
        location.href = "special-4.html";
        $(this).css({
            "border": "none",
            "color": "#ffffff",
            "background-color": "#dd7d59"
        }).sibling().css({
            "border": "#eee solid 0.2667vw",
            "color": "#999999",
            "background-color": "none"
        })
    })
    $(".dea-section .dea-title p:nth-child(n+2)").click(function() {
            location.href = "special-4.html";
        })
        /*  var deaUpcontent = document.querySelector('.dea-upcontent');
         var deaPhoto = window.getComputedStyle(deaUpcontent, ':before'); */
    $('.dea-upcontent p:first-child').click(function() {
        location.href = "me-a-5.html";
    })
    $('.dea-aside img:first-child').click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
            // window.scroll(0, 0)
    })
    $('.dea-aside img:nth-child(2)').click(function() {
        location.href = "group-input.html";
    })
    $('.dea-aside img:last-child').click(function() {
        location.href = "group-speak.html";
    })
})