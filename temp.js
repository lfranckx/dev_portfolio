function showPage() {
    $('.nav-list li').click(function() {
        let id = ('#') + $(this).attr('show');
        console.log(id);
        $(id).toggleClass("hidden");
    });
}

showPage();