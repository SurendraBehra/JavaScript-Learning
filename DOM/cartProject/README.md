# Cart Quantity Counter (JavaScript DOM)

## Features
- Displays the current cart quantity.
- Add items to the cart using different increment buttons.
- Increase cart quantity by predefined values (+1, +2, +3, +4, +5).
- Decrease cart quantity using decrement buttons (−2, −3).
- Reset the cart quantity to zero.
- Updates the cart quantity dynamically on the webpage.

## Concepts Used
- HTML Buttons
- JavaScript Functions
- DOM Manipulation
- `document.querySelector()`
- `innerHTML`
- Global Variables
- Button Click Events (`onclick`)
- Template Literals

## How to Run
1. Save the file as `index.html`.
2. Open the file in any modern web browser.
3. Click the buttons to add or remove items from the cart.
4. The updated cart quantity will be displayed below the buttons.

## Button Functionality
- **Show Quantity** → Displays the current cart quantity.
- **Add to Cart** → Increases quantity by 1.
- **+2 / +3 / +4 / +5** → Adds multiple items at once.
- **−2 / −3** → Decreases cart quantity.
- **Remove from Quantity** → Resets the cart quantity to `0`.

## Code Logic Overview
- `cartQuantity` stores the current number of items.
- `common()` updates the displayed quantity after every change.
- `showQua()` displays the current cart quantity.
- `remove()` resets the cart quantity to zero and updates the display.

## Learning Outcome
- Understanding DOM updates using JavaScript
- Handling button click events
- Managing and updating global state
- Dynamically displaying data on a webpage