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
                  //проявляем:
                  textPopup.style.display = "block"; 
                  //скрываем:
                  setTimeout(function () {
                      textPopup.style.display = "none"; 
                  }, 1000);
              }, 500);
          });
      } else {
          button.style.display = 'none';
      }
  })();