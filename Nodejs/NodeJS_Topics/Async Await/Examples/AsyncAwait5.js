/**Waits for the first fulfilled promise.

Ignores rejections unless all promises reject.

If all fail → throws an AggregateError */

async function parallelAny() {
  const urls = [
    "https://dummyjson.com/invalid-url", // this fails
    "https://dummyjson.com/products?limit=10&skip=10", // this succeeds
  ];

  try {
    const result = await Promise.any(
      urls.map((url) =>
        fetch(url).then((res) => {
          if (!res.ok) throw new Error("Failed");
          return res.json();
        })
      )
    );
    console.log("🎯 First successful:", result.products.length);
  } catch (err) {
    console.error("❌ All failed:", err);
  }
}
parallelAny();
