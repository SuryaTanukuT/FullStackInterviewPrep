/* Use Promise.allSettled() to fetch multiple product pages
'https://dummyjson.com/products?limit=10&skip=0',
    'https://dummyjson.com/products?limit=10&skip=10',
    'https://dummyjson.com/products?limit=10&skip=20',
    'https://dummyjson.com/invalid-endpoint' // simulate a failure
*/

async function fetchProductsAllSettled() {
  const urls = [
    "https://dummyjson.com/products?limit=10&skip=0",
    "https://dummyjson.com/products?limit=10&skip=10",
    "https://dummyjson.com/products?limit=10&skip=20",
    "https://dummyjson.com/invalid-endpoint", // simulate a failure
  ];

  console.time("AllSettled Fetch Time");

  const fetchPromises = urls.map((url) =>
    fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch ${url} (Status: ${res.status})`);
      }
      return res.json();
    })
  );

  const results = await Promise.allSettled(fetchPromises);

  console.timeEnd("AllSettled Fetch Time");

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(
        `✅ Page ${index + 1}:`,
        result.value.products.map((p) => p.title)
      );
    } else {
      console.error(`❌ Page ${index + 1} Error:`, result.reason.message);
    }
  });
}

fetchProductsAllSettled();

/** 
   * AllSettled Fetch Time: 992.71ms
✅ Page 1: [ 'iPhone 9', 'iPhone X', ... ]
✅ Page 2: [ 'HP Pavilion 15-DK1056WM', ... ]
✅ Page 3: [ 'Tree Oil 30ml', 'Oil Free Moisturizer 100ml', ... ]
❌ Page 4 Error: Failed to fetch https://dummyjson.com/invalid-endpoint (Status: 404)

  */


