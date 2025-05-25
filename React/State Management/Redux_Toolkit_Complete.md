
# ⚙️ Redux Toolkit (RTK) Core Concepts

Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It provides a powerful set of utilities to simplify store setup, reducer logic, async actions, and more.

---

## 🏗️ configureStore

Sets up the Redux store with good defaults including Redux DevTools and middleware.

```js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/items/itemsSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer
  }
});

export default store;
```

---

## ✂️ createSlice

Generates action creators and action types with reducers in a single slice.

```js
import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
```

---

## 🔄 createAsyncThunk

Handles async logic with built-in action types (pending, fulfilled, rejected).

```js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('/api/items');
  return response.data;
});
```

---

## 🧠 createReducer

Allows reducer logic with `builder` API and `immer` support.

```js
import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem } from './actions';

const initialState = [];

const itemsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      state.push(action.payload);
    })
    .addCase(removeItem, (state, action) => {
      return state.filter(item => item.id !== action.payload);
    });
});
```

---

## 📦 createEntityAdapter

Helps manage normalized state for lists with CRUD utilities.

```js
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const itemsAdapter = createEntityAdapter();
const initialState = itemsAdapter.getInitialState();

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: itemsAdapter.addOne,
    updateItem: itemsAdapter.updateOne,
    removeItem: itemsAdapter.removeOne
  }
});

export const { addItem, updateItem, removeItem } = itemsSlice.actions;
export const selectors = itemsAdapter.getSelectors(state => state.items);
export default itemsSlice.reducer;
```

---

## 🌐 RTK Query

Powerful data fetching and caching tool.

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/items'
    })
  })
});

export const { useGetItemsQuery } = itemsApi;
```

---

## ⚙️ Middleware

Custom logic in between dispatching an action and the moment it reaches the reducer.

```js
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
});
```

---

## 🧩 Selectors

Functions that extract specific data from the Redux state.

```js
export const selectItems = state => state.items.list;
```

---

## 🧬 Immer

Redux Toolkit uses Immer internally to allow writing "mutating" logic that safely updates state immutably.

```js
const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      state += 1; // looks like mutation, handled immutably by Immer
      return state;
    }
  }
});
```

---

## 📚 Summary Table

| Feature              | Description |
|----------------------|-------------|
| `configureStore`     | Sets up the store with good defaults |
| `createSlice`        | Combines reducers + action creators |
| `createAsyncThunk`   | Simplifies async actions |
| `createReducer`      | Alternative to createSlice for reducers |
| `createEntityAdapter`| Normalize state for CRUD operations |
| `RTK Query`          | Fetching & caching data |
| `Middleware`         | Custom logic in Redux pipeline |
| `Selectors`          | Extract data from state |
| `Immer`              | Write mutable logic that is immutable underneath |

---

RTK simplifies Redux, improves performance, and speeds up development. It's the preferred modern way to manage state in large-scale React applications.
