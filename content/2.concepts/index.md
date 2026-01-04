---
title: Core Concepts
description: Understanding the foundational concepts of Rice Slate.
navigation:
  icon: i-lucide-lightbulb
seo:
  title: Core Concepts
  description: Deep dive into the Rice Slate architecture and its four memory systems.
---

Rice Slate is a state and runtime context management layer for AI agents. It provides structured memory systems inspired by human cognition, powered by RiceDB's persistent storage.

---

## What is RiceDB?

RiceDB is the persistent storage and memory engine that powers Rice Slate. It uses Hyperdimensional Computing (HDC) to contextualize data, mapping it as graph equivalents without the need for edge-based traversal.

### How RiceDB Works

- **HDC Encoding**: Data is projected into high-dimensional vectors, enabling associative fetching and clustering
- **Linear Algebra Operations**: Convolution at the hyper vector level ensures data and metadata aren't lost, even with noise
- **Persistent Storage**: Long-term storage of all agent state and knowledge

RiceDB handles the low-level storage, indexing, and vector operations. Rice Slate builds on top of RiceDB to provide the cognitive abstractions that make it easy to build learning, stateful agents.

---

## What is Rice Slate?

Rice Slate is the state and runtime context management layer that sits between your AI agents and RiceDB. It provides a quad-component memory architecture:

| Memory Type | Purpose |
| :---------- | :------ |
| **Working Memory** | Direct bridge between persistent storage and runtime. Pre-fetches context and relevant data for execution. |
| **Episodic Memory** | Captures and tracks agent data: reasoning, inputs, outcomes, and actions. |
| **Procedural Memory** | Stores executable skills, code, and sub-agents. |
| **Semantic Memory** | Stores invariant facts and knowledge for agentic use. |

---

## The Four Memory Types

### 1. Working Memory

**"The Attention Span"**

Working Memory is the direct bridge between persistent storage and your agent's runtime. Using proprietary algorithms, it pre-fetches context and has associative data points loaded and available for use.

**Key Characteristics:**

- **Decay**: Items decay over time if not accessed, simulating natural forgetting
- **Attention**: Items are returned sorted by relevance (Attention Score)
- **High-Velocity**: Optimized for rapid read/write cycles

**API:**

| Method | Description |
| :----- | :---------- |
| `focus(content)` | Push information into the agent's attention stream |
| `drift()` | Retrieve current context sorted by relevance |

---

### 2. Episodic Memory

**"The Autobiography"**

Episodic Memory captures and tracks agent data including reasoning, inputs, outcomes, and actions. Every action an agent takes can be "committed" as a trace.

**Trace Structure:**

- **Input**: What triggered the action
- **Action**: What the agent decided to do
- **Outcome**: The result of the action
- **Reasoning**: Why the agent made that decision

**Key Characteristics:**

- **Semantic Retrieval**: Uses vector search to find similar past experiences
- **Few-Shot Learning**: Past traces enable in-context learning
- **Persistent**: Stored long-term for continuous improvement

**API:**

| Method | Description |
| :----- | :---------- |
| `commit(input, outcome, action, reasoning)` | Record an experience as a trace |
| `reminisce(query)` | Recall past experiences similar to the query |

---

### 3. Procedural Memory

**"The Muscle Memory"**

Procedural Memory is for executable skills, code, and sub-agents. It runs compiled WebAssembly skills server-side with deterministic, sandboxed execution.

**Key Characteristics:**

- **Compiled Skills**: Pre-built WebAssembly modules for common operations
- **Deterministic**: Same input always produces the same output
- **Sandboxed**: Runs securely without exposing your infrastructure

**API:**

| Method | Description |
| :----- | :---------- |
| `trigger(skill_name)` | Execute a server-side WASM skill |

---

### 4. Semantic Memory

**"The Knowledge Base"**

Semantic Memory stores invariant facts and knowledge for agentic use. Unlike Episodic Memory which stores experiences, Semantic Memory holds general knowledge that doesn't change frequently.

**Key Characteristics:**

- **Factual Storage**: Stores facts, definitions, and reference data
- **Knowledge Graphs**: Maintains relationships between concepts
- **Shared Context**: Knowledge available across all agent sessions

**Use Cases:**

- Product catalogs and specifications
- Company policies and procedures
- Domain-specific knowledge bases
- Reference documentation

::callout{icon="i-lucide-database" color="primary"}
**Architecture Summary**: Your AI agents connect to Rice Slate, which manages the four memory types. Rice Slate is powered by RiceDB, which provides persistent storage using Hyperdimensional Computing.
::
