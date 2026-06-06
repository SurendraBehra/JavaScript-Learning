## Features
- Enter text in a text input field.
- Text updates automatically while typing (real-time).
- Displays the entered text on the webpage instantly.
- Demonstrates basic DOM manipulation in JavaScript.
- Uses keyboard input events to trigger updates.

## Concepts Used
- HTML Input Elements
- JavaScript Functions
- DOM Manipulation
- `document.querySelector()`
- `value` Property
- `innerHTML`
- Keyboard Events (`onkeyup`)

## How to Run
1. Save the code as `index.html`.
2. Open the file in any modern web browser.
3. Type anything in the input field.
4. The text will be displayed immediately below the input box.

## Code Overview
### HTML
```html
<input type="text" class="inputbtn"
       placeholder="you can write anything here"
       onkeyup="result();">

<p class="js-para"></p>