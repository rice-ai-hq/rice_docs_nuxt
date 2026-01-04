---
title: Core Concepts
description: Understanding the foundational concepts of Slate.
navigation:
  icon: i-lucide-lightbulb
seo:
  title: Core Concepts
  description: Deep dive into Flux, Echoes, and Reflex—the three memory systems in Slate.
---

Slate is a "Cognitive Substrate" for AI agents—a memory-as-a-service platform that provides structured memory systems inspired by human cognition.

---

## 1. Flux (Working Memory)

**"The Attention Span"**

Flux manages the agent's immediate context. Unlike a raw context window, Flux is dynamic and attention-based.

### Key Characteristics

- **Decay**: Items in Flux decay over time if not accessed, simulating natural forgetting.
- **Attention**: When you read from Flux (`drift`), items are returned sorted by relevance (Attention Score).
- **High-Velocity**: Optimized for the rapid read/write cycles of an active agent loop.

### Use Cases

- Storing current task state
- Recent conversation history
- Scratchpad notes and intermediate thoughts

### API

| Method | Description |
| :----- | :---------- |
| `focus(content)` | Push information into the agent's attention stream |
| `drift()` | Retrieve current context sorted by relevance |

---

## 2. Echoes (Episodic Memory)

**"The Autobiography"**

Echoes stores the history of interactions. Every action an agent takes can be "committed" as a trace, enabling learning from experience.

### Trace Structure

Each trace consists of four components:

- **Input**: What triggered the action
- **Action**: What the agent decided to do
- **Outcome**: The result of the action
- **Reasoning**: Why the agent made that decision

### Key Characteristics

- **Semantic Retrieval**: Uses vector search to find past experiences similar to the current situation.
- **Few-Shot Learning**: Past traces can be injected into prompts for in-context learning.
- **Persistent**: Traces are stored long-term for continuous improvement.

### Use Cases

- Learning from past mistakes
- Recalling user preferences from weeks ago
- Few-shot prompting based on history

### API

| Method | Description |
| :----- | :---------- |
| `commit(input, outcome, action, reasoning)` | Record an experience as a trace |
| `reminisce(query)` | Recall past experiences similar to the query |

---

## 3. Reflex (Procedural Memory)

**"The Muscle Memory"**

Reflex executes compiled skills (WebAssembly) server-side. These are deterministic, sandboxed procedures that agents can trigger.

### Key Characteristics

- **Compiled Skills**: Pre-built WebAssembly modules for common operations.
- **Deterministic**: Same input always produces the same output.
- **Sandboxed**: Runs securely on the server without exposing your infrastructure.

### Use Cases

- Deterministic calculations (tax, pricing, conversions)
- Data validation and transformation
- Reusable tool implementations

### API

| Method | Description |
| :----- | :---------- |
| `trigger(skill_name)` | Execute a server-side WASM skill |

---

## Architecture: Slate + RiceDB

Slate is the application layer built on top of **RiceDB**, a high-performance hyperdimensional computing engine.

```
┌─────────────────────────────────────┐
│           Your AI Agent             │
├─────────────────────────────────────┤
│              Slate                  │
│  ┌─────────┬─────────┬─────────┐    │
│  │  Flux   │ Echoes  │ Reflex  │    │
│  │ Working │Episodic │Procedural│   │
│  └─────────┴─────────┴─────────┘    │
├─────────────────────────────────────┤
│             RiceDB                  │
│   Hyperdimensional Computing Engine │
└─────────────────────────────────────┘
```

::callout{icon="i-lucide-database" color="primary"}
**RiceDB** handles the low-level storage, indexing, and vector operations. **Slate** provides the cognitive abstractions that make it easy to build learning, stateful agents.
::
