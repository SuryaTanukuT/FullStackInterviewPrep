Here’s a clean, interview-ready summary of **Lazy Loading Images & Assets**—perfect to include in your notes or use in answers:

---

### 🖼️ **5. Lazy Loading Images & Assets**

---

### 📘 **Explanation**

**Lazy loading** delays loading of images, videos, or other assets **until they are about to enter the viewport**. This boosts performance by cutting down on unnecessary data fetched during the initial page load.

---

### ⚙️ **How It Works**

#### ✅ **Using the Intersection Observer API**
This API watches DOM elements and triggers callbacks when they intersect with the viewport.

#### ✅ **React Implementation Using `react-intersection-observer`**

```jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

function LazyImage({ src, alt, placeholder, ...rest }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? <img src={src} alt={alt} {...rest} /> : placeholder}
    </div>
  );
}

export default LazyImage;
```

You can pass a custom placeholder (like a blurred thumbnail, spinner, etc.) until the real image loads.

---

### 🧠 **Scenario**

On a blog or product page with **many images**, lazy loading ensures only visible images are loaded initially. Images further down are fetched **on scroll**, improving performance and user experience.

---

### ✅ **Pros**

- **🚀 Performance Boost**: Faster initial load time
- **📉 Bandwidth Optimization**: Assets load only when needed
- **📱 Mobile Friendly**: Less network strain on slower connections

---

### ❌ **Cons**

- **🧩 Extra Logic**: Requires IntersectionObserver setup or a 3rd-party library
- **📉 SEO Challenges**: Search bots might not load lazy content (must use SSR or preload critical images)

---

### 🧭 **When, Why, Where**

| **Question** | **Answer** |
|--------------|------------|
| **When?** | Long-scroll or image/video-heavy pages |
| **Why?** | To reduce load time and save bandwidth |
| **Where?** | Blogs, e-commerce product pages, image galleries, news feeds |

---

### 🧩 **Polyfill & Compatibility**

- **Polyfill**: Use [`intersection-observer`](https://www.npmjs.com/package/intersection-observer) npm package for older browsers
- **Browser Support**: Well-supported in modern browsers (Chrome, Firefox, Edge, Safari)

---

### 🚀 Bonus Tip

For basic image lazy loading (no JS required), use the native HTML `loading="lazy"` attribute:

```html
<img src="image.jpg" alt="..." loading="lazy" />
```

Supported in most modern browsers.

---

Would you like a **cheat sheet** comparing all 5 code splitting & lazy loading techniques side by side?