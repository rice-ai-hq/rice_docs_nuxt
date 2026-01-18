---
title: Core Concepts
description: Understanding the Rice architecture.
navigation:
  icon: i-lucide-lightbulb
seo:
  title: Core Concepts
  description: Learn about Storage (RiceDB) and Slate, the two components of Rice.
---

Rice provides a complete cognitive infrastructure for AI agents. It consists of two main components:

| Component | Purpose |
| :-------- | :------ |
| **Storage** | Storage and memory engine |
| **Slate** | State and runtime context management |

---

## Storage

Rice's storage layer is a high-performance database designed for Multi-Agent AI Systems. It handles:

- **Vector Search**: Semantic similarity over embeddings
- **Graph Database**: Structural relationships between entities
- **Agent Memory**: Lightweight scratchpad for multi-agent coordination
- **Access Control**: Bitmap-based ACL for zero-latency permission checks
- **Pub/Sub**: Real-time notifications with semantic subscriptions

RiceDB uses Hyperdimensional Computing (HDC) for noise-tolerant, high-speed operations on memory traces.

[Learn more about Storage →](/concepts/ricedb)

---

## Slate

Slate is the state and runtime context management layer that sits between your AI agents and storage. It provides a four-component cognitive memory architecture:

| Memory Type | Purpose |
| :---------- | :------ |
| **Working Memory** | Pre-fetches context with decay and attention scoring |
| **Episodic Memory** | Stores interaction traces for learning from experience |
| **Procedural Memory** | Executes compiled skills server-side |
| **Semantic Memory** | Stores invariant facts and knowledge |

Slate turns stateless LLMs into learning, stateful agents.

[Learn more about Slate →](/concepts/slate)

---

## How They Work Together

```
Your AI Agent
     ↓
   Slate (Memory Management)
     ↓
   Storage (RiceDB)
```

1. Your agent calls Slate APIs (`focus`, `drift`, `commit`, `reminisce`)
2. Slate manages the cognitive abstractions (attention, decay, traces)
3. RiceDB handles the low-level storage, indexing, and vector operations

This separation means you can focus on building intelligent agent behavior while Rice handles the memory infrastructure.
