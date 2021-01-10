// https://github.com/Jamesits/TheOtherShoes
var TheOtherShoes = (function() {
    var isAdBlockerInstalled = function() {
        if(document.getElementById('553b9579-e5d8-47d4-b3ca-5cc49356a56e')){
            return false;
        } else {
            return true;
        }
    };

    var showNotification = function() {
        var e = document.createElement('div');
        e.id = 'the-other-shoes-modal-dialog';

        // create child elements
        var ne = document.createElement('div');
        ne.id = 'notification';
        ne.innerHTML = 'Our web is made possible by you (and everyone else) blocking the ads on every website. Please consider supporting us by installing an ad blocker. <br><a href="https://github.com/gorhill/uBlock#installation" target="_blank">Get one now for free</a> <a onclick="TheOtherShoes.hideNotification()">Next time</a>'
        e.appendChild(ne);

        document.body.appendChild(e);
    };

    var hideNotification = function() {
        document.getElementById("the-other-shoes-modal-dialog").style.display = 'none';
        sessionStorage && (sessionStorage['TheOtherShoesNotificationDismissed'] = "1");
    }

    var run = function() {
        if (sessionStorage && sessionStorage['TheOtherShoesNotificationDismissed'] != 1 && !(isAdBlockerInstalled())) {
            showNotification();
        }
    }

    // exposed interfaces
    return {
        isAdBlockerInstalled: isAdBlockerInstalled,
        showNotification: showNotification,
        hideNotification: hideNotification,
        run: run,
    };
})();
