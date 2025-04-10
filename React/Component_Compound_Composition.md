``md
# 🧱 React Composition vs Compound Components

This guide explains **Composition** and **Compound Components** in React with in-depth examples, comparisons, use cases, pros, and cons.

---

## 📘 1. Composition in React

### 🔍 What is it?
**Composition** is React's natural pattern of composing UI by nesting components inside each other using `children`.

### 💡 Key Idea:
Build flexible components that receive UI/logic through props or `children`, instead of hardcoding behavior.

### 🧪 Example

```jsx
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const App = () => (
  <Card>
    <h2>Title</h2>
    <p>This is a card description</p>
  </Card>
);
```

### ✅ Pros
- Simple and flexible
- Encourages reusability
- Clean and declarative

### ❌ Cons
- May get messy with deeply nested children
- Logic sharing between parent and child is limited

### 📌 When to Use
- For generic containers or wrappers
- Example: `Modal`, `Card`, `Layout`

---

## 🧩 2. Compound Components

### 🔍 What is it?
A design pattern where multiple related components communicate internally via **shared context or parent state**.

### 💡 Key Idea:
The parent handles logic and shares it implicitly with child components.

### 🧪 Example (Tabs)

```jsx
const TabsContext = React.createContext();

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }) => <div className="tab-list">{children}</div>;

const Tab = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = React.useContext(TabsContext);
  return (
    <button
      className={index === activeIndex ? 'active' : ''}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ children }) => {
  const { activeIndex } = React.useContext(TabsContext);
  return <div className="tab-panels">{children[activeIndex]}</div>;
};

const TabPanel = ({ children }) => <div className="tab-panel">{children}</div>;

// Usage
const App = () => (
  <Tabs>
    <TabList>
      <Tab index={0}>Tab 1</Tab>
      <Tab index={1}>Tab 2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
    </TabPanels>
  </Tabs>
);
```

### ✅ Pros
- Clean and intuitive for consumers
- Logic is centralized
- Ideal for components that work together

### ❌ Cons
- Setup is more complex
- Tightly coupled structure
- Can break if children are misused

### 📌 When to Use
- For building component groups with shared behavior
- Example: `Tabs`, `Accordion`, `Dropdown`, `Stepper`

---

## 🔄 Composition vs Compound Components

| Feature          | Composition                          | Compound Components                            |
|------------------|--------------------------------------|-------------------------------------------------|
| Communication    | Parent to children via `props`/`children` | Internal state via context or coordination    |
| Flexibility      | Highly flexible                      | Structured and intentional                     |
| Use Case         | Wrappers, containers                 | Related UI parts with shared behavior          |
| Setup Complexity | Simple                               | More involved                                  |
| Example          | `Card`, `Layout`, `Modal`            | `Tabs`, `Accordion`, `Dropdown`                |

---

## 🧠 Summary

| Pattern             | When to Use                                      | Why Use It                                          | Real-life UI Examples            |
|---------------------|--------------------------------------------------|-----------------------------------------------------|----------------------------------|
| Composition         | When you need flexible, reusable containers      | Promotes clean, generic, reusable components        | `Card`, `Layout`, `Modal`        |
| Compound Components | When components are tightly related and stateful | Enables intuitive APIs with internal state handling | `Tabs`, `Accordion`, `Dropdown` |
