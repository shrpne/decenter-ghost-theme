  (function () {
      var ATTR_NAME = 'data-clipbrd-copy';
      var clipboard = window.clipbrd;
      var button = document.querySelector('[' + ATTR_NAME + ']');
      var textPopup = document.getElementById("popup"); 

      if (clipboard.isSupported()) {
          button.addEventListener('click', () => {
              var text = button.getAttribute(ATTR_NAME);
              clipboard.copy(text);

              // Добавила ВСПЛЫВАЮЩЕЕ ОКНО у кнопки COPY
              setTimeout(function () {
                  textPopup.style.display = "block"; //скрывем
                  setTimeout(function () {
                      textPopup.style.display = "none"; //проявляем
                  }, 3000);
              }, 500);
          });
      } else {
          button.style.display = 'none';
      }
  })();