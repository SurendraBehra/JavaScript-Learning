## Features
- Displays a button with initial text **"start"**
- Changes button text to **"Loading....."** when clicked
- Automatically updates button text to **"finished!."** after 2 seconds
- Demonstrates dynamic UI updates
- Uses JavaScript timers and event handling

## Concepts Used
- HTML Button Element
- JavaScript DOM Manipulation
- `document.querySelector()`
- Event Listener (`addEventListener`)
- `setInterval()`
- Anonymous Functions
- `innerHTML`

## How to Run
1. Save the file as `index.html`
2. Open the file in any modern web browser
3. Click the **start** button
4. Button text changes to **Loading.....**
5. After 2 seconds, text changes to **finished!.**

## Code Logic Overview
- `.finish` selects the button element
- `addEventListener` detects button click
- `innerHTML` updates the button text
- `setInterval()` runs the function every 2000 milliseconds

## Note
Each click starts a new interval.  
For a single execution, `setTimeout()` is more suitable.