
# Event Handling in JavaScript

## Inline Event Handlers
- Defined directly in HTML using the `on` prefix.
- Example: `<button onclick="alert('Clicked!')">Click me</button>`

## DOM Event Properties
- Events can be handled using DOM properties like `element.onclick`.
- Example:
  ```javascript
  document.getElementById('btn').onclick = function() {
    alert('Clicked!');
  };
  ```

## Event Listeners
- Use `addEventListener` for multiple handlers and better control.
- Example:
  ```javascript
  element.addEventListener('click', function() {
    console.log('Clicked');
  });
  ```

## Event Bubbling & Capturing
- Bubbling: Event flows from target up to root.
- Capturing: Event flows from root down to target.
- Use `{ capture: true }` for capturing phase.

## Preventing Default Behavior
- Use `event.preventDefault()` to stop default action.
- Example: Prevent form submission.
  ```javascript
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
  ```

## Event Delegation
- Attach a single event listener to a parent element.
- Use `event.target` to handle events on child elements.
- Efficient for dynamic elements.

## Custom Events
- Create and dispatch custom events using `CustomEvent`.
- Example:
  ```javascript
  const event = new CustomEvent('myEvent', { detail: { key: 'value' } });
  element.dispatchEvent(event);
  ```

## Asynchronous Event Handling
- Events can trigger asynchronous code using Promises or async/await.
- Example:
  ```javascript
  button.addEventListener('click', async () => {
    const data = await fetchData();
    console.log(data);
  });
  ```
