
# 🧠 Redux Key Concepts & API Overview

This document covers the essential Redux APIs and concepts including `Provider`, `useSelector`, `useDispatch`, `useStore`, `Reducers`, `Action Creators`, and `Selectors`.

---

## 🏢 Provider

The `Provider` component makes the Redux store available to any nested components that need to access the Redux store.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

## 🧲 useSelector

`useSelector` allows you to extract data from the Redux store state.

```js
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const items = useSelector((state) => state.items);
  return <div>{items.length} items</div>;
};
```

---

## 🚀 useDispatch

`useDispatch` returns the store's dispatch method to dispatch actions.

```js
import { useDispatch } from 'react-redux';
import { addItem } from './itemsSlice';

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem({ id: 1, name: 'Example' }));
  };

  return <button onClick={handleAdd}>Add Item</button>;
};
```

---

## 🧰 useStore

`useStore` returns a reference to the Redux store used in your application.

```js
import { useStore } from 'react-redux';

const MyComponent = () => {
  const store = useStore();
  console.log('Current state:', store.getState());
  return null;
};
```

---

## 🔁 Reducers

Reducers specify how the application state changes in response to actions.

```js
const initialState = {
  items: []
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
```

---

## ✉️ Action Creators

Functions that create and return action objects.

```js
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item
});
```

---

## 🧩 Selectors

Functions that extract specific pieces of state from the Redux store.

```js
// selector function
export const selectItems = (state) => state.items;

// usage with useSelector
const items = useSelector(selectItems);
```

---

## ✅ Summary

| Concept        | Purpose                                                  |
|----------------|-----------------------------------------------------------|
| `Provider`     | Supplies the Redux store to the React app                |
| `useSelector`  | Access specific slices of state                          |
| `useDispatch`  | Dispatch actions to update state                         |
| `useStore`     | Access the entire Redux store                            |
| `Reducers`     | Define how state changes based on actions                |
| `Action Creators` | Encapsulate action logic into reusable functions     |
| `Selectors`    | Reusable, composable logic to read state                 |

---

Using these tools together helps build scalable, maintainable, and predictable state management in React applications using Redux.
