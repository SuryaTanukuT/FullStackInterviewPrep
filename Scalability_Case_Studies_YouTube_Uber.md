
# 🌍 Real-World Scalability: YouTube and Uber

---

## 📺 How YouTube Supports 2.49 Billion Users With MySQL

### Key Strategies:
- **Sharding**: YouTube shards user data by user ID or geography across multiple MySQL servers.
- **Read Replicas**: MySQL replicas serve read traffic, reducing load on primaries.
- **Query Caching**: Heavy use of in-memory caches like **Memcached** and **Redis** for frequently accessed metadata (views, likes, video info).
- **Batch Writes**: Non-critical writes (views, analytics) are batched and processed asynchronously.
- **Denormalization**: Data is flattened to reduce expensive JOINs for read performance.
- **Metadata Store**: MySQL handles video metadata, but actual video content is stored in object storage (e.g., Google Blobstore or custom CDN layers).

---

## 🚗 How Uber Computes ETA at Half a Million Requests/Second

### Core Systems:
- **H3 Hexagonal Grid System**: The Earth is divided into hexagonal regions for efficient geospatial indexing.
- **Real-time Telemetry**: Driver locations are updated via push streams (Kafka, pub/sub).
- **ETA Service**: Uses road graph traversal + historical traffic + real-time telemetry to compute ETA.
- **Precomputed Routes**: Commonly traveled paths are cached and updated dynamically.
- **Statistical Modeling**: ETA predictions are powered by ML models trained on ride history.

### Technologies Used:
- Go, Node.js, Cassandra, Redis, Kafka, Elasticsearch.

---

## 🚕 How Uber Finds Nearby Drivers at 1M Requests/Second

### System Design:
- **Geospatial Indexing**:
  - Uses Uber’s open-source **H3** spatial index to divide the world into hexes.
  - Driver locations mapped to H3 cells and queried based on user proximity.

- **Pub/Sub Location Updates**:
  - Driver apps stream their location every few seconds via **Kafka**.
  - Backend systems update in-memory caches (Redis, Memcached).

- **In-Memory Search**:
  - Lookups for nearby drivers use **Redis GEO** or in-house geospatial structures.
  - Ensures sub-millisecond access time.

- **Load Balancing**:
  - Stateless services allow horizontal scaling.
  - Smart routing via API Gateways and Service Mesh.

### High Availability:
- Redundant regional data centers.
- Distributed systems with fallback mechanisms.
- Aggressive monitoring and auto-healing.

---

These systems are built for extreme scale, emphasizing efficient data partitioning, real-time streaming, in-memory caching, and intelligent indexing.
