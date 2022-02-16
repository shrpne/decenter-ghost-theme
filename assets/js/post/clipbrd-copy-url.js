  (function () {
      var ATTR_NAME = 'data-clipbrd-copy';
      var clipboard = window.clipbrd;
      var button = document.querySelector('[' + ATTR_NAME + ']');
      var copyPopup = document.querySelector('[data-social-copy-popup]');

      if (clipboard.isSupported()) {
          button.addEventListener('click', () => {
              var text = button.getAttribute(ATTR_NAME);
              clipboard.copy(text);

              // Добавила ВСПЛЫВАЮЩЕЕ ОКНО у кнопки COPY
              copyPopup.style.display = "block";
              setTimeout(function () {
                  copyPopup.style.display = "none";
              }, 2500);
          });
      } else {
          button.style.display = 'none';
      }
  })();