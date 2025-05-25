
# Redux CRUD with Functional Components (Using Hooks)

## 📌 Introduction to Redux

**Redux** is a predictable state container for JavaScript apps. It helps manage application state in a centralized way, making state changes more predictable and testable.

In modern React applications, Redux is used along with the `@reduxjs/toolkit` and `react-redux` hooks like `useSelector` and `useDispatch`.

---

## 🧱 Redux Core Concepts Recap

### 1. **Store**
The single source of truth for state.

```js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/items/itemsSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer
  }
});
```

### 2. **Actions and Reducers (Redux Toolkit Slice)**

```js
// features/items/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { addItem, deleteItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
```

---

## ⚛️ Functional Component with Redux Hooks

### Example: `ItemList.js`

```js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, updateItem } from './features/items/itemsSlice';

function ItemList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addItem({ id: Date.now(), name: input }));
      setInput('');
    }
  };

  const handleUpdate = () => {
    dispatch(updateItem({ id: editingId, name: input }));
    setInput('');
    setEditingId(null);
  };

  const startEditing = (item) => {
    setEditingId(item.id);
    setInput(item.name);
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={editingId ? handleUpdate : handleAdd}>
        {editingId ? 'Update' : 'Add'}
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => startEditing(item)}>Edit</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
```

---

## ✅ Complete Redux CRUD Flow with Hooks

1. Create a slice with reducers and actions using `createSlice`.
2. Setup the Redux store using `configureStore`.
3. Provide the store using `<Provider>`.
4. Access state with `useSelector`.
5. Dispatch actions using `useDispatch`.

---

## 🔗 File Structure

```
/src
  /features
    /items
      itemsSlice.js
  /components
    ItemList.js
  store.js
  App.js
  index.js
```

---

This guide demonstrates how to use Redux for CRUD operations in **React functional components using hooks**, following modern best practices with Redux Toolkit.
