## 1) What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- `getElementById(id)` returns a single element by that id.
- `getElementsByClassName(className)` returns  HTMLCollection of elements that have the given class.
- `querySelector(selector)` returns the first element matching a CSS selector (like `.class`, `#id`, `div > p`).
- `querySelectorAll(selector)` returns a static NodeList of all elements matching the CSS selector.



## 2) How do you create and insert a new element into the DOM?


1. Create the element: `const el = document.createElement('div');`
2. Set content or attributes: `el.textContent = 'Hello'; el.className = 'my-class';`
3. Insert into DOM: `parent.appendChild(el);`.


## 3) What is Event Bubbling and how does it work?


- Event Bubbling is when an event triggered on a child element moves up (bubbles) through its parents in the DOM tree. For example, clicking a button inside a div triggers the button's click event first, then the div's click handler, then the document, unless stopped.



## 4) What is Event Delegation in JavaScript? Why is it useful?


- Event Delegation is a pattern where instead of attaching event listeners to many child elements, you attach a single listener to a common parent and use the event's `target` to determine which child was interacted with. This reduces memory usage, works for dynamically added elements, and simplifies code.



## 5) What is the difference between `preventDefault()` and `stopPropagation()` methods?


- `preventDefault()` prevents the browser's default action for an event. Example: preventing form submission, stopping a link from navigating.
- `stopPropagation()` stops the event from bubbling (or capturing) further — it prevents parent elements from receiving the event.






