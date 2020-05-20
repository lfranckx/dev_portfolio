function jumpPage() {
    $('.nav-wrap li').click(function() {
        let id = "#" + $(this).attr('goto');
        let top = $(id).position().top;
        $('html').scrollTop(top);
    });
}

function dropMenuJump() {
    $('.dropMenu li').click(function() {
        let id = "#" + $(this).attr('goto');
        let top = $(id).position().top;
        $('html').scrollTop(top);
    });
}

dropMenuJump();
jumpPage();
openNewTab();