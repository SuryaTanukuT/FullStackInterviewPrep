/* Executing Multiple Async Calls in Parallel

Let’s say you want to fetch 3 pages of products like:

https://dummyjson.com/products?limit=10&skip=0

https://dummyjson.com/products?limit=10&skip=10

https://dummyjson.com/products?limit=10&skip=20 */

async function fetchProductsInParallel() {
  try {
    console.time("Parallel Fetch Time");

    const urls = [
      "https://dummyjson.com/products?limit=10&skip=0",
      "https://dummyjson.com/products?limit=10&skip=10",
      "https://dummyjson.com/products?limit=10&skip=20",
    ];

    const fetchPromises = urls.map((url) =>
      fetch(url).then((res) => res.json())
    );
    /*console.log(fetchPromises);
  [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ] Parallel Fetch Time: 1.038s */
    const results = await Promise.all(fetchPromises);
    console.timeEnd("Parallel Fetch Time");

    results.forEach((data, index) => {
      console.log(
        `Page ${index + 1}:`,
        data.products.map((p) => p.title)
      );

      /*
        Parallel Fetch Time: 932.018ms
Page 1: [ 'iPhone 9', 'iPhone X', 'Samsung Universe 9', ... ]
Page 2: [ 'HP Pavilion 15-DK1056WM', 'perfume Oil', ... ]
Page 3: [ 'Tree Oil 30ml', 'Oil Free Moisturizer 100ml', ... ]
  */
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProductsInParallel();

/*
urls.map(...) creates an array of Promises.
Promise.all() runs them in parallel, and waits for all to finish.
console.time measures total duration for all 3.
*/
