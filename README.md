# The Other Shoes

Tell the user to install an ad blocker before continuing viewing your site!

## Usage

Add these to the end of your HTML document, before `</body>`:

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/Jamesits/TheOtherShoes/dist/TheOtherShoes.css">
<script src="https://cdn.jsdelivr.net/gh/Jamesits/TheOtherShoes/dist/wp-content/plugins/anti_ad_blocker/no-adblock/tagman/piwik/prebid/_sidebar_ad/adblocker.js?view=ad&act=ads_&ad_block=1&showad=1&ref=a&tag=b&action=js_stats&event=view&visitorUuid=0" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/gh/Jamesits/TheOtherShoes/dist/TheOtherShoes.js" type="text/javascript"></script>
<script>
(function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
            fn();
        });
    }
})(function() {
    TheOtherShoes.run();
});
</script>
```

## Thanks

Ad blocker detection method is provided by https://www.detectadblock.com/
