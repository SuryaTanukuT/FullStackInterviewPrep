
# Redux CRUD with Functional Components (Without Hooks)

## 📌 Introduction to Redux

**Redux** is a predictable state container for JavaScript apps, commonly used with React for managing the application state in a central store.

## 🧱 Redux Core Concepts

### 1. **Store**
A centralized place to hold the application state.

```js
import { createStore } from 'redux';
const store = createStore(rootReducer);
```

### 2. **Actions**
Plain JavaScript objects describing **what** happened.

```js
// action types
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// action creators
function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

function deleteItem(id) {
  return { type: DELETE_ITEM, payload: id };
}
```

### 3. **Reducers**
Functions that specify how the state changes in response to actions.

```js
const initialState = {
  items: []
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
```

### 4. **Dispatch**
Used to send actions to the reducer.

```js
store.dispatch(addItem({ id: 1, name: 'Item 1' }));
store.dispatch(deleteItem(1));
```

### 5. **Provider (React-Redux)**

```js
import { Provider } from 'react-redux';
import store from './store';

<Provider store={store}>
  <App />
</Provider>
```

## 🛠️ CRUD Implementation with Functional Components (Without Hooks)

### Connect Redux to Functional Components using `connect`

```js
import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './actions';

function ItemList(props) {
  const [input, setInput] = React.useState('');

  const handleAdd = () => {
    const newItem = { id: Date.now(), name: input };
    props.addItem(newItem);
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => props.deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = {
  addItem,
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
```

## ✅ Summary of Workflow

1. Define actions (`action.js`).
2. Create reducers (`reducer.js`).
3. Setup store (`store.js`).
4. Connect Redux to your components using `connect` (no hooks).
5. Use `Provider` to wrap your app.

---

## 🔗 File Structure

```
/src
  /actions
    index.js
  /reducers
    index.js
  /components
    ItemList.js
  store.js
  App.js
  index.js
```

---

This guide covers Redux CRUD in a functional component environment **without using hooks**, relying instead on the traditional `connect` API.
