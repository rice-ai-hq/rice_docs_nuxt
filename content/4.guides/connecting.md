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

Slate clients are currently available via the GitHub repository.

### Node.js / TypeScript

```bash
# Clone and build
git clone https://github.com/rice-ai-hq/rice_slate.git
cd rice_slate/clients/node
npm install
npm run build
```

### Python

```bash
# Install from GitHub
pip install git+https://github.com/rice-ai-hq/rice_slate.git#subdirectory=clients/python
```

::card
---
icon: i-simple-icons-github
target: _blank
title: rice_slate on GitHub
to: https://github.com/rice-ai-hq/rice_slate
---
Full source code and examples.
::

## Connection Basics

You need two pieces of information to connect:
- **Address**: Your Slate instance address (e.g., `localhost:50051` or `xyz-123.slate.cloud:50051`)
- **Auth Token**: Your secret authentication token

::callout{icon="i-lucide-info" color="blue"}
**Note**: Since the clients are not yet published to npm/PyPI, adjust your import paths based on your local setup.
::

### Node.js

```typescript
// If installed locally from the cloned repo:
import { CortexClient } from "./path/to/rice_slate/clients/node/dist";

// Once published to npm:
// import { CortexClient } from "slate-client";

const client = new CortexClient("localhost:50051", "your-secret-token");
```

### Python

```python
from slate_client import CortexClient

client = CortexClient(address="localhost:50051", token="your-secret-token")
```

## Verifying Your Connection

Test your connection by performing a simple Working Memory operation:

### Node.js

```typescript
import { CortexClient } from "./path/to/rice_slate/clients/node/dist";

const client = new CortexClient("localhost:50051", "your-secret-token");

// Add something to working memory
await client.focus("Connection test");

// Read it back
const items = await client.drift();
console.log(`Connected! Found ${items.length} items in Working Memory.`);
```

### Python

```python
from slate_client import CortexClient

client = CortexClient(address="localhost:50051", token="your-secret-token")

# Add something to working memory
client.focus("Connection test")

# Read it back
items = client.drift()
print(f"Connected! Found {len(items.items)} items in Working Memory.")
```

## Transport Protocol

Slate uses gRPC for efficient, low-latency communication. The default port is `50051`.

::callout{icon="i-lucide-zap" color="primary"}
gRPC provides faster serialization, bidirectional streaming, and persistent connections, ideal for real-time agent loops.
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
- Some corporate proxies block gRPC. Try from a different network.

::tip
Use environment variables to store your auth token securely:
```bash
export SLATE_TOKEN="your-secret-token"
```
Then read it in your code to avoid hardcoding secrets.
::
