# Welcome to RiceDB

**The Unified Database for Autonomous AI Agents**

RiceDB is the first database purpose-built for the next generation of AI agents. It unifies **Hyper Vector Search**, **Neural Associations**, and **Agent Memory** into a single, high-performance engine.

By eliminating the need to stitch together a vector database, a graph database, and a caching layer, RiceDB simplifies your architecture and accelerates your AI development.

---

## Why RiceDB?

### 🧠 Dual-Memory Architecture

Seamlessly integrate **Working Memory** (scratchpad) for active tasks with **Long-Term Memory** (Hyper Vectors & Associations) for deep knowledge. Agents can "think" fast in scratchpad and "remember" deep context from long-term storage.

### 🕸️ Structural Reasoning

Go beyond simple similarity. Navigate semantic associations natively to give your agents true context understanding. RiceDB finds not just what is _similar_, but what is _connected_.

### ⚡ High Performance

Built on Rust with a Zero-Copy architecture. Low-latency retrieval optimized for real-time agent interactions, even under heavy load.

### 🔒 Secure by Design

Granular Access Control Lists (ACLs) ensure data isolation in multi-tenant environments. Perfect for building SaaS platforms where data privacy is paramount.

---

## Use Cases

### Autonomous Research Agents

- **Working Memory**: Store current research goals, search queries, and intermediate findings.
- **Long-Term Memory**: Index millions of documents as Hyper Vectors.
- **Associations**: Link findings to original sources and related concepts.

### Customer Support Bots

- **Working Memory**: Maintain conversation history and user intent.
- **Long-Term Memory**: Retrieve relevant help articles and past tickets.
- **Associations**: Suggest related solutions based on successful resolution paths.

### Coding Assistants

- **Working Memory**: Track current file context and cursor position.
- **Long-Term Memory**: Search entire codebase embeddings.
- **Associations**: Understand function call graphs and dependency trees.

---

## Your Journey with RiceDB

Getting started with RiceDB is designed to be simple and fast.

### 1. Start

Sign up at the **[RiceDB Console](https://app.tryrice.com)** to launch your first instance in seconds.

### 2. Connect

Get your credentials from the console and connect using our simple Python SDK.
[**View Connection Guide →**](guides/connecting.md)

### 3. Build

Use the **Rice Agents** framework or your preferred tools to build intelligent, stateful agents.
[**Build Agents →**](guides/agents.md)

---

## Explore the Docs

- **[Getting Started](getting-started.md)**: A step-by-step walkthrough of your first 5 minutes.
- **[Core Concepts](concepts.md)**: Deep dive into Hyper Vectors, Neural Associations, and Memory.
- **[Python Client Reference](guides/connecting.md)**: Detailed API usage and configuration.
- **[Building Agents](guides/agents.md)**: Best practices for agent state management.
