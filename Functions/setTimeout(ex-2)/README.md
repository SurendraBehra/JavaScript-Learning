## Features
- Displays a dynamic notification count in the browser tab
- Updates the page title every second
- **Add** button increases notification count
- **Remove** button decreases notification count
- Automatically resets title when count reaches zero
- Simulates unread message notifications

## Concepts Used
- HTML Button Elements
- JavaScript DOM Manipulation
- `document.title`
- `setInterval()`
- Arrow Functions
- Conditional Statements (`if / else`)
- Global Variables
- Inline Event Handlers (`onclick`)

## How to Run
1. Save the file as `index.html`
2. Open the file in any modern web browser
3. Observe the number in the browser tab
4. Click **Add** to increase notification count
5. Click **Remove** to decrease notification count
6. When count reaches **0**, title resets to **App**

## Code Logic Overview
- `time` variable stores the notification count
- `setInterval()` runs every 1000 milliseconds
- If `time > 0`, title updates to `(count) new messages`
- If `time === 0`, title resets to `App`
- `add()` increments the count
- `remove()` decrements the count


