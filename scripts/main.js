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
    var backgroundsUrlPrefix = 'img/backgrounds/';

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
            ).fadeIn(3000);
        });
        curBackground = (curBackground === backgroundsCount) ? 1 : ++curBackground;
    }, 10000);

    // "fullscreen" background image viewing (by hiding the content)
    var $body = $('body');
    var $content = $('#content');
    $body.on('click', function(e) {
        if (e.target === $body.get(0)) $content.fadeToggle();
    });

    // mini player
    var tracks = [];
    var $player = $('#player');
    var $playerBtn = $player.find('.player-btn');
    var $playerTitle = $player.find('.player-title');

    var playNextTrack = function() {
        var track = tracks[Math.floor(Math.random() * tracks.length)];
        // soundManager.useHTML5Audio = true;
        SC.stream(
            track.uri,
            { onfinish: playNextTrack, autoPlay: true, html5only: true },
            function(track) { currentTrack = track; }
        );
        $playerTitle.attr('href', track.permalink_url).text(track.title);
    };
    var currentTrack = { togglePause: playNextTrack };

    // async player loading and initialization
    $.getScript('https://connect.soundcloud.com/sdk.js', function() {
        var clientId = 'e123680e99cfdd302dd0c76d47a69385';

        SC.initialize({ client_id: clientId });

        var playlistUrl = 'https://api.soundcloud.com/playlists/2353797';
        $.getJSON(playlistUrl, { client_id: clientId }, function(playlistData) {
            tracks = playlistData.tracks;
            $player.fadeIn();
            $playerBtn.on('click', function() {
                $playerBtn.toggleClass('playing');
                currentTrack.togglePause();
            });
        });
    });
});
