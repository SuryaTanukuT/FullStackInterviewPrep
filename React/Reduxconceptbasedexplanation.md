Here’s a detailed overview of Redux concepts, illustrated with a real-time example of a **Calculator App**:

---

## **Redux Concepts Explained Using a Calculator Example**

Imagine we're building a simple calculator app. This app has basic operations like addition, subtraction, multiplication, and division. We will apply the core Redux concepts to manage the app’s state.

### 1. **Store**: Centralized location for the app's state

The **store** holds the entire state of the application. In a Redux-powered app, we store all the application state here, and every time it changes, the store gets updated.

For our calculator, the state could include the current value of the display, the previous value, and the operation that was last performed.

```javascript
const initialState = {
  currentValue: 0,  // Current number on the screen
  previousValue: 0, // Last number before the operation
  operation: null   // Current operation (+, -, *, /)
};
```

**Store Setup:**

```javascript
import { createStore } from 'redux';

const store = createStore(calculatorReducer);
```

### 2. **Action**: A plain JavaScript object describing an event in the application

**Actions** are plain JavaScript objects that describe a type of event that happens in your application. Every time the state needs to be updated, an action is dispatched.

For example, in the calculator app, actions could be:
- **ADD_NUMBER** to add a digit to the current value.
- **SET_OPERATION** to set the operation (e.g., add, subtract).
- **CLEAR** to reset the calculator.
- **EVALUATE** to compute the result based on the current operation.

```javascript
// Example of actions
const addNumber = (number) => ({
  type: 'ADD_NUMBER',
  payload: number
});

const setOperation = (operation) => ({
  type: 'SET_OPERATION',
  payload: operation
});

const clearCalculator = () => ({
  type: 'CLEAR'
});

const evaluateResult = () => ({
  type: 'EVALUATE'
});
```

### 3. **Reducer**: A function specifying how the state changes in response to an action

A **reducer** is a pure function that accepts the current state and an action, then returns the new state. It specifies how the state should change based on the action type.

In our calculator, the reducer would handle the different actions like adding numbers, setting operations, evaluating results, or clearing the state.

```javascript
const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        ...state,
        currentValue: state.currentValue * 10 + action.payload
      };
    case 'SET_OPERATION':
      return {
        ...state,
        previousValue: state.currentValue,
        currentValue: 0,
        operation: action.payload
      };
    case 'CLEAR':
      return {
        ...initialState
      };
    case 'EVALUATE':
      let result;
      switch (state.operation) {
        case '+':
          result = state.previousValue + state.currentValue;
          break;
        case '-':
          result = state.previousValue - state.currentValue;
          break;
        case '*':
          result = state.previousValue * state.currentValue;
          break;
        case '/':
          result = state.previousValue / state.currentValue;
          break;
        default:
          result = state.currentValue;
      }
      return {
        ...state,
        currentValue: result,
        previousValue: 0,
        operation: null
      };
    default:
      return state;
  }
};
```

### 4. **Dispatch**: A function to send an action to the Redux store

The **dispatch** function sends actions to the Redux store. Whenever a user interacts with the calculator (e.g., presses a button), the app dispatches an action to the store to update the state.

For example, when a user presses a number, we would dispatch the `addNumber` action:

```javascript
// Dispatching actions
store.dispatch(addNumber(5)); // Adds 5 to the current value
store.dispatch(setOperation('+')); // Set the operation to addition
store.dispatch(addNumber(3)); // Adds 3 to the current value
store.dispatch(evaluateResult()); // Calculates the result (5 + 3)
```

### 5. **Selector**: Functions used to extract data from the store

Selectors are functions that extract specific pieces of the state. Instead of directly accessing the Redux store, you use selectors to get the data you need, which helps encapsulate the state management logic.

For the calculator, you might have a selector to get the current value:

```javascript
const getCurrentValue = (state) => state.currentValue;
```

You can now access the current value like so:

```javascript
const currentValue = getCurrentValue(store.getState());
console.log(currentValue); // Displays the current value of the calculator
```

### Full Redux Flow for the Calculator

Here's how it all comes together in a real-time example. Let's assume the user presses 5, then the `+` button, then 3, and finally hits the equals button to calculate the result:

1. **Initial state**:
   ```json
   {
     "currentValue": 0,
     "previousValue": 0,
     "operation": null
   }
   ```

2. **User presses 5**:  
   Dispatch the `addNumber` action.
   ```javascript
   store.dispatch(addNumber(5));
   ```

   **State after action**:
   ```json
   {
     "currentValue": 5,
     "previousValue": 0,
     "operation": null
   }
   ```

3. **User presses `+`**:  
   Dispatch the `setOperation` action.
   ```javascript
   store.dispatch(setOperation('+'));
   ```

   **State after action**:
   ```json
   {
     "currentValue": 0,
     "previousValue": 5,
     "operation": "+"
   }
   ```

4. **User presses 3**:  
   Dispatch the `addNumber` action.
   ```javascript
   store.dispatch(addNumber(3));
   ```

   **State after action**:
   ```json
   {
     "currentValue": 3,
     "previousValue": 5,
     "operation": "+"
   }
   ```

5. **User presses `=` (Evaluate)**:  
   Dispatch the `evaluateResult` action.
   ```javascript
   store.dispatch(evaluateResult());
   ```

   **State after action**:
   ```json
   {
     "currentValue": 8,
     "previousValue": 0,
     "operation": null
   }
   ```

Now, the calculator shows `8`, which is the result of `5 + 3`.

---

## **Summary**

- **Store**: Centralized location to hold all app state (calculator values).
- **Action**: Plain objects that describe user interactions (e.g., pressing a number, setting an operation).
- **Reducer**: Defines how the state changes in response to an action (calculating result, updating current value).
- **Dispatch**: Sends actions to the store to update the state (e.g., pressing a button dispatches an action).
- **Selector**: Functions that extract specific data from the store (e.g., getting the current value to display on the screen).

By using these Redux concepts, you can build scalable, maintainable, and predictable state management for even complex applications, like this calculator app.