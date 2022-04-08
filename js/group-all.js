window.addEventListener('load', function() {
    $(".gra-midcontent").click(function() {
        location.href = "group-particulars.html"
    })
    $(".gra-section .gra-title p:eq(0) span:nth-child(n+2)").click(function() {
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
    $(".gra-section .gra-title p:nth-child(n+2)").click(function() {
            location.href = "special-4.html";
        })
        /*  var graUpcontent = document.querySelector('.gra-upcontent');
         var graPhoto = window.getComputedStyle(graUpcontent, ':before'); */
    $('.gra-upcontent p:first-child').click(function() {
        location.href = "me-a-5.html";
    })
    $('.gra-aside img:first-child').click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
            // window.scroll(0, 0)
    })
    $('.gra-aside img:nth-child(2)').click(function() {
        location.href = "group-input.html";
    })
    $('.gra-aside img:last-child').click(function() {
        location.href = "group-speak.html";
    })
})