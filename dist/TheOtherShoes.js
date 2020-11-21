var TheOtherShoes = (function() {
    var isAdBlockerInstalled = function() {
        if(document.getElementById('WOuzPZciTHsd')){
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
        ne.innerText = 'Our web is made possible by you blocking the ads on every website. Please consider supporting us by installing an ad blocker.'
        e.appendChild(ne);

        document.body.appendChild(e);
    };

    var run = function() {
        if (!(isAdBlockerInstalled())) {
            showNotification();
        }
    }

    // exposed interfaces
    return {
        isAdBlockerInstalled: isAdBlockerInstalled,
        showNotification: showNotification,
        run: run,
    };
})();
