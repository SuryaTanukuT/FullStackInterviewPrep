1️⃣ Build a Counter App – Implement a counter that increments/decrements on button clicks.
2️⃣ Todo List Application – Create a simple todo list with add, delete, and edit functionality.
3️⃣ Dynamic Form Handling – Build a form that dynamically adds/removes input fields.
4️⃣ Drag & Drop UI – Implement a drag-and-drop feature using React DnD.
5️⃣ Pagination Component – Create a paginated list with next/previous buttons.
6️⃣ Search & Filter Functionality – Implement a search bar that filters a list dynamically.
7️⃣ Debouncing & Throttling – Optimize input handling using debounce/throttle techniques.
8️⃣ Infinite Scroll – Load more data dynamically as the user scrolls.
9️⃣ Authentication Flow – Implement login/logout with JWT authentication.\]
Here’s a curated list of **React machine coding questions** ranging from beginner to expert levels. These questions are designed to test your understanding of React concepts, problem-solving skills, and ability to write clean, maintainable code.

---

## **Beginner Level**

1. **Counter Component**:
   - Create a simple counter component with a button to increment the count.
   - Add a reset button to reset the count to zero.

2. **Todo List**:
   - Build a basic todo list application where users can add, delete, and mark tasks as completed.

3. **Conditional Rendering**:
   - Create a component that displays "Welcome Back" if a user is logged in and "Please Log In" otherwise.

4. **Form Handling**:
   - Create a form with fields for name and email. Display the entered data below the form in real-time.

5. **Dynamic List Rendering**:
   - Render a list of items from an array. Add functionality to delete an item from the list.

6. **Styling with Props**:
   - Create a button component that accepts a `color` prop and applies it as the background color.

---

## **Intermediate Level**

1. **API Integration**:
   - Fetch data from a public API (e.g., JSONPlaceholder) and display it in a table. Add a search bar to filter the results.

2. **Pagination**:
   - Implement pagination for a list of items fetched from an API. Display 10 items per page.

3. **React Context API**:
   - Create a theme toggle (light/dark mode) using the Context API. Ensure the theme persists across components.

4. **Debounced Search**:
   - Build a search bar with a debounce mechanism to delay API calls until the user stops typing.

5. **Drag and Drop**:
   - Implement a drag-and-drop feature to reorder items in a list.

6. **Dynamic Forms**:
   - Create a form where users can dynamically add or remove input fields.

---

## **Advanced Level**

1. **Custom Hooks**:
   - Write a custom hook `useFetch` to handle API calls and manage loading and error states.

2. **React Portals**:
   - Create a modal component using React Portals. Ensure it supports closing on clicking outside the modal.

3. **Code Splitting**:
   - Implement lazy loading for a component using `React.lazy` and `Suspense`.

4. **State Management**:
   - Build a shopping cart application using Redux or Zustand. Include features like adding/removing items and calculating the total price.

5. **Performance Optimization**:
   - Optimize a component with unnecessary re-renders using `React.memo` and `useCallback`.

6. **Infinite Scrolling**:
   - Implement infinite scrolling for a list of items fetched from an API.

7. **Error Boundaries**:
   - Create an error boundary component to catch and display errors in the child components.

8. **Microfrontend Integration**:
   - Build a microfrontend application where two React apps communicate with each other using Webpack Module Federation.

---

## **Expert Level**

1. **Real-Time Chat Application**:
   - Build a real-time chat application using WebSockets. Include features like typing indicators and message timestamps.

2. **Dynamic Theming**:
   - Create a dynamic theming system where users can customize colors and fonts. Persist the theme using local storage.

3. **SSR with Next.js**:
   - Build a server-side rendered React application using Next.js. Include dynamic routing and API integration.

4. **React Profiler**:
   - Use the React Profiler API to measure and optimize the performance of a complex component tree.

5. **Complex State Management**:
   - Build a Kanban board application with drag-and-drop functionality and persistent state using Redux Toolkit.

6. **Testing with React Testing Library**:
   - Write unit and integration tests for a component that fetches and displays data from an API.

7. **Authentication Flow**:
   - Implement a complete authentication flow with login, logout, and protected routes using React Router and Context API.

8. **GraphQL Integration**:
   - Build a React application that fetches data from a GraphQL API using Apollo Client.

Certainly! Here's a curated list of **React machine coding questions** specifically categorized into **product-based** and **service-based scenarios**. These questions range from beginner to expert levels and focus on real-world use cases that align with the objectives and workflows of both types of companies.

---

### **Product-Based React Machine Coding Questions**

#### **Beginner Level**
1. **Dynamic Product List**:
   - Build a component that fetches a list of products from a static array and displays them. Include features like filtering by category and searching by name.
   - Example: Display a list of electronics with options to filter by mobile, laptop, etc.

2. **E-Commerce Cart**:
   - Implement an Add-to-Cart feature where users can add items to a cart and view the cart contents. Add functionality to remove items from the cart.

3. **Product Reviews**:
   - Create a reviews section for a product page where users can add a review with their name and rating. Sort reviews by the highest rating.

4. **Stock Tracker**:
   - Create a component that tracks product inventory. Display a message when stock is running low (<10 units).

---

#### **Intermediate Level**
1. **Dynamic Pricing Calculator**:
   - Implement a pricing calculator for product variants (size, color, etc.) using props and state. For example, calculate the price based on selected size (small/medium/large).

2. **Wish List**:
   - Build a wish list feature where users can add products to their list and persist it using local storage or state management.

3. **Real-Time Product Status**:
   - Fetch product data from a mock API and implement real-time updates for price changes and stock availability using WebSocket or polling.

4. **Image Gallery**:
   - Develop an image gallery for a product page. Users should be able to click on thumbnails to view the full-size product image.

5. **Infinite Scroll for Products**:
   - Implement infinite scrolling for a product catalog. Fetch more items from an API as users scroll down.

---

#### **Advanced Level**
1. **Customized Product Builder**:
   - Build a product customization tool (e.g., a t-shirt designer) that lets users select colors, add text, and preview their design in real-time.

2. **Performance Optimized Filters**:
   - Create a filtering system for a product catalog that dynamically updates filtered results without unnecessary re-renders. Use techniques like `React.memo`, `useCallback`, and `React.useMemo`.

3. **Dynamic Comparison Tool**:
   - Build a comparison tool that lets users select and compare multiple products side by side. Ensure that attributes (e.g., price, features) are displayed clearly.

4. **Error Boundary for Product Page**:
   - Implement an error boundary component that catches rendering errors and displays a fallback UI for product-related features.

5. **Product Recommendations**:
   - Fetch and display product recommendations based on user behavior using a mock recommendation API. Optimize performance with code splitting and lazy loading.

---

### **Service-Based React Machine Coding Questions**

#### **Beginner Level**
1. **Employee Directory**:
   - Build a searchable employee directory for an IT service company. Include fields like name, department, and role.

2. **Feedback Form**:
   - Create a feedback form component where clients can rate services and submit comments. Display submitted feedback below the form.

3. **Meeting Scheduler**:
   - Develop a meeting scheduler that lets users select a date and time and see all scheduled meetings in a calendar view.

4. **Service Status Dashboard**:
   - Build a dashboard that displays the status of various services (active/inactive). Users can toggle service status using a button.

---

#### **Intermediate Level**
1. **Project Tracker**:
   - Create a tracker for ongoing projects with features like adding a new project, assigning team members, and updating the status.

2. **Invoice Generator**:
   - Build a service invoice generator where users input service details and the total cost is calculated dynamically.

3. **Client Login Page**:
   - Implement a secure client login page. Validate credentials and display client-specific data upon successful login.

4. **Real-Time Chat Support**:
   - Create a customer support chat widget that integrates with WebSocket to provide real-time messaging.

5. **Service Analytics Dashboard**:
   - Develop a dashboard that visualizes service metrics (e.g., uptime, response time) using chart libraries like Chart.js or Recharts.

---

#### **Advanced Level**
1. **Dynamic Forms for Service Contracts**:
   - Build a dynamic form generator for creating service contracts. Allow users to add/remove fields dynamically.

2. **Role-Based Access Control**:
   - Create an application where users with different roles (admin/client/team member) see different components based on their permissions.

3. **Optimized Large Data Display**:
   - Render and paginate a large dataset (e.g., client service requests). Use virtualization to enhance performance.

4. **Client Portfolio Manager**:
   - Build a portfolio manager where users can upload files, view uploaded documents, and manage categories dynamically.

5. **Customizable Service Pricing**:
   - Create a service pricing calculator with real-time updates based on selected features or service tiers.

---

### **Comparison of Questions: Product vs. Service**
| **Category**              | **Product-Based**                              | **Service-Based**                              |
|----------------------------|-----------------------------------------------|-----------------------------------------------|
| **Focus**                  | Features, shopping experience, and scalability. | Client interaction and service management.    |
| **Use Cases**              | E-commerce, catalog management, customization. | Dashboards, service tracking, and client apps.|
| **Advanced Scenarios**     | Product recommendation engines, comparison tools, t-shirt designer. | Real-time chat, contract management, analytics dashboards. |
| **Technologies to Include**| API integration, WebSockets, state optimization. | Role-based access, file handling, secure login.|

---

This list provides a comprehensive range of coding challenges suitable for both product-based and service-based companies. Let me know if you'd like solutions or further explanation for any of these questions!


useState  with form and usereduce with forms