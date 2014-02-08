$(function() {

    // menu initialization
    var $menu = $('#menu');
    var $menuEntries = $menu.children('div');
    var $playIframe = $('#play iframe');
    $(window).on('hashchange', function() {
        $menuEntries.hide();
        var clickedMenuEntry =
            $menuEntries.filter(window.location.hash).size() ?
            window.location.hash :
            '#index';

        // actually active "play" iframe
        // because for now applet is self-signed, Java plugin displays security window
        // this code need to be removed when applet will be signed properly
        if (clickedMenuEntry === '#play' && !$playIframe.attr('src')) {
            $playIframe.attr('src', $playIframe.data('src'));
        }

        $(clickedMenuEntry).show();
    }).trigger('hashchange'); // initial

});

$(window).load(function() {
    var curBackground = 1;
    var backgroundsCount = 10;
    var backgroundsExt = '.jpg';
    var backgroundsUrlPrefix = 'css/img/backgrounds/';

    // simple images preloading
    for (var i = curBackground; i <= backgroundsCount; i++) {
        $('<img src="' + backgroundsUrlPrefix + i + backgroundsExt + '">');
    }

    var $backgroundContainer = $('#background');

    // background images cycling
    setInterval(function() {
        $backgroundContainer.fadeOut('slow', function() {
            $backgroundContainer.css(
                'background-image',
                'url(' + backgroundsUrlPrefix + curBackground + backgroundsExt + ')'
            ).fadeIn('slow');
        });
        curBackground = (curBackground === backgroundsCount) ? 1 : ++curBackground;
    }, 5000);
});
