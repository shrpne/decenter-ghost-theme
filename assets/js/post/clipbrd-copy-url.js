(function () {
    var ATTR_NAME = 'data-clipbrd-copy';

    var clipboard = window.clipbrd;
    var button = document.querySelector('[' + ATTR_NAME + ']');

    if (clipboard.isSupported()) {
        button.addEventListener('click', () => {
            var text = button.getAttribute(ATTR_NAME);
            clipboard.copy(text);
        });
    } else {
        button.style.display = 'none';
    }
})();
