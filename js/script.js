
      document
        .getElementById("editor")
        .addEventListener("input", function (event) {
          const editor = event.target;
          const cursorPosition = window
            .getSelection()
            .getRangeAt(0).startOffset;

          if (event.data === "{") {
            // If the user types an opening curly brace, insert a closing curly brace
            document.execCommand("insertHTML", false, "}");
            setCursorPosition(cursorPosition);
          } else if (event.data === "(") {
            // If the user types an opening parenthesis, insert a closing parenthesis
            document.execCommand("insertHTML", false, ")");
            setCursorPosition(cursorPosition);
          } else if (event.data === '"') {
            // If the user types a double quote, insert a closing double quote
            document.execCommand("insertHTML", false, '"');
            setCursorPosition(cursorPosition);
          } else if (event.data === "'") {
            // If the user types a single quote, insert a closing single quote
            document.execCommand("insertHTML", false, "'");
            setCursorPosition(cursorPosition);
          }
        });

      function setCursorPosition(position) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.setStart(selection.anchorNode, position);
        range.setEnd(selection.anchorNode, position);
        selection.removeAllRanges();
        selection.addRange(range);
      }
