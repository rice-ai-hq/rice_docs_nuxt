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
npm install git+https://github.com/rice-ai-hq/slate.git#subdirectory=clients/node
```

### Python

```bash
pip install git+https://github.com/rice-ai-hq/slate.git#subdirectory=clients/python
```

::card
---
icon: i-simple-icons-github
target: _blank
title: Slate on GitHub
to: https://github.com/rice-ai-hq/slate
---
Full source code and examples.
::

## Connection Basics

You need two pieces of information to connect:
- **Address**: Your Slate instance address (e.g., `grpc.your-instance-id.slate.tryrice.com:80`)
- **Auth Token**: Your secret authentication token
- **Run ID** (optional): Isolates data between sessions (defaults to `"default"`)

::code-group
```typescript [Node.js]
import { CortexClient } from "slate-client";

// Basic connection
const client = new CortexClient("grpc.your-instance-id.slate.tryrice.com:80", "your-secret-token");

// With run_id for session isolation
const sessionClient = new CortexClient(
  "grpc.your-instance-id.slate.tryrice.com:80",
  "your-secret-token",
  "my-session-id"
);
```

```python [Python]
from slate_client import CortexClient

# Basic connection
client = CortexClient(address="grpc.your-instance-id.slate.tryrice.com:80", token="your-secret-token")

# With run_id for session isolation
session_client = CortexClient(
    address="grpc.your-instance-id.slate.tryrice.com:80",
    token="your-secret-token",
    run_id="my-session-id"
)
```
::

## Verifying Your Connection

Test your connection by performing a simple Working Memory operation:

::code-group
```typescript [Node.js]
import { CortexClient } from "slate-client";

const client = new CortexClient("grpc.your-instance-id.slate.tryrice.com:80", "your-secret-token");

// Add something to working memory
await client.focus("Connection test");

// Read it back
const items = await client.drift();
console.log(`Connected! Found ${items.length} items in Working Memory.`);
```

```python [Python]
from slate_client import CortexClient

client = CortexClient(address="grpc.your-instance-id.slate.tryrice.com:80", token="your-secret-token")

# Add something to working memory
client.focus("Connection test")

# Read it back
items = client.drift()
print(f"Connected! Found {len(items.items)} items in Working Memory.")
```
::

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
