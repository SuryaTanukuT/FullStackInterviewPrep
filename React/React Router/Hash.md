2. Hash Router
Explanation
What It Is:
<HashRouter> uses the URL hash (#) portion to keep the UI in sync with the URL. The part after the hash is never sent to the server.

How It Works:
The router listens for changes to window.location.hash and renders components based on that value.

Code Example
jsx
Copy
Edit
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
Scenario
A legacy intranet application or static site hosted on a server without proper URL rewriting. The URLs might look like http://example.com/#/about.

Pros and Cons
Pros:

No server configuration required since the hash is not sent to the server.

Works well on static file hosts.

Cons:

URLs include a hash, which is less clean.

Not as SEO-friendly as BrowserRouter because search engines might treat hash URLs differently.

When, Why, and Where to Use
When: For static sites, legacy systems, or environments without server support for rewriting URLs.

Why: To simplify routing without requiring server configuration.

Where: In prototypes, static file hosts, and legacy intranet apps.

Polyfill/Compatibility
Polyfill:
No additional polyfill is needed; the hash API is widely supported.

Compatibility:
Works in all modern browsers and even older ones, as it relies on the hash portion of the URL.