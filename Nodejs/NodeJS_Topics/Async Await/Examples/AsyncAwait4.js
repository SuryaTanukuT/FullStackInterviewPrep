/**Promise.race() is used when you want to get the result of the fastest promise — whichever resolves or rejects first. */

async function fetchProductsRace() {
    const urls = [
      'https://dummyjson.com/products?limit=10&skip=0',
      'https://dummyjson.com/products?limit=10&skip=10',
      'https://dummyjson.com/products?limit=10&skip=20'
    ];
  
    console.time('Race Fetch Time');
  
    try {
      const fetchPromises = urls.map(url =>
        fetch(url).then(res => {
          if (!res.ok) {
            throw new Error(`Failed to fetch ${url}`);
          }
          return res.json();
        })
      );
  
      const firstResult = await Promise.race(fetchPromises);
  
      console.timeEnd('Race Fetch Time');
      console.log('🏁 First Response Product Titles:', firstResult.products.map(p => p.title));
    } catch (error) {
      console.error('❌ Race failed:', error.message);
    }
  }
  
  fetchProductsRace();

  /**
   * Race Fetch Time: 87 ms
🏁 First Response Product Titles: [ 'iPhone 9', 'iPhone X', ... ]
Promise.race() returns whichever settles first (resolved or rejected).

If the fetch is fast enough, it wins.

If it’s too slow, the timeout wins and throws.
   */
  