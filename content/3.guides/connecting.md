---
title: Connecting to Slate
description: Learn how to connect to your Slate instance.
navigation:
  icon: i-lucide-plug
seo:
  title: Connecting to Slate
  description: Detailed guide on connecting to Slate using the Node.js and Python SDKs.
---

Connecting to Slate is simple. Both Node.js and Python clients use the `CortexClient` to communicate with your Slate instance.

## Installation

### Node.js / TypeScript

```bash
npm install slate-client
```

### Python

```bash
pip install slate-client
```

## Connection Basics

You need two pieces of information to connect:
- **Address**: Your Slate instance address (e.g., `localhost:50051` or `xyz-123.slate.cloud:50051`)
- **Auth Token**: Your secret authentication token

### Node.js

```typescript
import { CortexClient } from "slate-client";

const client = new CortexClient("localhost:50051", "your-secret-token");
```

### Python

```python
from slate_client import CortexClient

client = CortexClient(address="localhost:50051", token="your-secret-token")
```

## Verifying Your Connection

Test your connection by performing a simple Flux operation:

### Node.js

```typescript
import { CortexClient } from "slate-client";

const client = new CortexClient("localhost:50051", "your-secret-token");

// Add something to working memory
await client.focus("Connection test");

// Read it back
const items = await client.drift();
console.log(`Connected! Found ${items.length} items in Flux.`);
```

### Python

```python
from slate_client import CortexClient

client = CortexClient(address="localhost:50051", token="your-secret-token")

# Add something to working memory
client.focus("Connection test")

# Read it back
items = client.drift()
print(f"Connected! Found {len(items.items)} items in Flux.")
```

## Transport Protocol

Slate uses gRPC for efficient, low-latency communication. The default port is `50051`.

::callout{icon="i-lucide-zap" color="primary"}
gRPC provides faster serialization, bidirectional streaming, and persistent connections—ideal for real-time agent loops.
::

## Troubleshooting

### "Connection Refused"

- Ensure the address is correct (format: `host:port`).
- Check if your firewall allows outbound traffic on port 50051.
- Verify the instance is running in the [Console](https://app.tryrice.com).

### "Authentication Failed"

- Double-check your auth token.
- Tokens can be regenerated from the Console if needed.

### "Transport Error"

- Ensure your network allows gRPC traffic.
- Some corporate proxies block gRPC—try from a different network.

::tip
Use environment variables to store your auth token securely:
```bash
export SLATE_TOKEN="your-secret-token"
```
Then read it in your code to avoid hardcoding secrets.
::
