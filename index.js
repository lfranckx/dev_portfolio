function jumpPage() {
    $('.nav-wrap li').click(function() {
        let id = "#" + $(this).attr('goto');
        let top = $(id).position().top;
        $('html').animate({ scrollTop: top }, 500);
    });
}

jumpPage();