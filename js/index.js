window.addEventListener('load', function() {
    $('.innav a').eq(0).on({
        touchstart: function() {
            $(this).css('transform', 'scale(0.9)')
        },
        touchend: function() {
            $(this).css('transform', 'scale(1)');
            location.href = 'index-appreciate.html'
        }
    })
    $('.innav a').eq(1).on({
        touchstart: function() {
            $(this).css('transform', 'scale(0.9)')
        },
        touchend: function() {
            $(this).css('transform', 'scale(1)');
            location.href = 'index-view.html'
        }
    })
    $('.innav a').eq(2).on({
        touchstart: function() {
            $(this).css('transform', 'scale(0.9)')
        },
        touchend: function() {
            $(this).css('transform', 'scale(1)');
            location.href = 'index-grass.html'
        }
    })
    $('.innav a').eq(3).on({
        touchstart: function() {
            $(this).css('transform', 'scale(0.9)')
        },
        touchend: function() {
            $(this).css('transform', 'scale(1)');
            location.href = 'index-fish.html'
        }
    })
    $('.innav a').eq(4).on({
        touchstart: function() {
            $(this).css('transform', 'scale(0.9)')
        },
        touchend: function() {
            $(this).css('transform', 'scale(1)');
            location.href = 'index-equipment .html'
        }
    })
    $('.intitle .innav-more1').on('touchstart', function() {
        location.href = 'group-all.html'
    })
    $('.incontentfooter').on('touchstart', function() {
        location.href = 'group-all.html'
    })
    $('.incontent .midcontent').on('touchstart', function() {
        location.href = 'group-particulars.html'
    })
    $('.focus ul li').on('touchstart', function() {
        location.href = 'index-appreciate.html'
    })
    $('.focus ul li:nth-child(3)').on('touchstart', function() {
        location.href = 'index-view.html'
    })
})