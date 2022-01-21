void function() {
    var comments = document.getElementById('tg-comments');

    if (! comments) {
        return;
    }

    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var themeAutoModeEnabled = document.documentElement.classList.contains('auto-color');
    var themeDarkModeEnabled = document.documentElement.classList.contains('dark-mode');

    var darkMode = (prefersDarkMode && themeAutoModeEnabled) || themeDarkModeEnabled ? '1' : '0';

    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'https://comments.app/js/widget.js';
    script.defer = true;

    Object.assign(script.dataset, comments.dataset, {
        dark: darkMode,
    });

    comments.appendChild(script);
}();
