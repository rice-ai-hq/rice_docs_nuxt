---
title: Connecting to Rice
description: Learn how to connect to your Rice instance.
navigation:
  icon: i-lucide-plug
seo:
  title: Connecting to Rice
  description: Detailed guide on connecting to Rice using Python SDK with HTTP and gRPC transport.
---

Rice supports multiple transport protocols to optimize for different use cases. The Python SDK abstracts most of this complexity away, but understanding the options can help you tune performance.

## Installation

Rice is currently in beta. Please install the client directly from the repository:

```bash
# Standard installation (HTTP support)
pip install git+https://github.com/rice-ai-hq/ricedb-python

# Recommended for production (adds gRPC support)
pip install "git+https://github.com/rice-ai-hq/ricedb-python#egg=ricedb[grpc]"
```

## Connection Basics

The `RiceDBClient` will automatically attempt to connect using the best available transport (gRPC if available, otherwise HTTP).

```python
from ricedb import RiceDBClient

# Connect to your instance host
# Note: Do not include http:// or https:// prefix
client = RiceDBClient("xyz-123.ricedb.cloud")
client.connect()

# Login to get an access token
client.login("admin", "your_password")
```

## Transport Modes

### 1. HTTP Mode (Port 3000)

- **Best for**: Development, firewalled environments, simple CRUD.
- **Default Port**: 3000
- **Pros**: Works everywhere, easy to debug with curl/Postman.

```python
# Force HTTP mode
client = RiceDBClient("xyz-123.ricedb.cloud", transport="http", port=3000)
```

### 2. gRPC Mode (Port 50051)

- **Best for**: Production, high-throughput, streaming search, real-time subscriptions.
- **Default Port**: 50051
- **Pros**: Faster serialization, bidirectional streaming, persistent connections.

```python
# Force gRPC mode
client = RiceDBClient("xyz-123.ricedb.cloud", transport="grpc", port=50051)
```

::callout{icon="i-lucide-zap" color="primary"}
For production deployments, we recommend using gRPC for better performance.
::

## Troubleshooting Connections

### "Connection Refused"

- Ensure the host address is correct.
- Check if your firewall allows outbound traffic on ports 3000 or 50051.
- Verify the instance status in the [Rice Console](https://app.tryrice.com).

### "Authentication Failed"

- Double-check your username (default: `admin`) and password.
- Passwords can be reset from the Console if needed.

### "Transport Error"

- If using gRPC, ensure `ricedb[grpc]` is installed.
- Try falling back to HTTP to rule out network protocol issues.

::tip
Use HTTP mode during development for easier debugging, then switch to gRPC in production for better performance.
::
