(async () => {
    const fetch = (await import('node-fetch')).default;
  
    console.time('API Response Time');
  
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
  
    console.timeEnd('API Response Time');
  
    // console.log('Data:', data);
  })();
  
  // API Response Time: 912.591ms