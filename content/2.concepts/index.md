---
title: Core Concepts
description: Understanding the foundational concepts of RiceDB.
navigation:
  icon: i-lucide-lightbulb
seo:
  title: Core Concepts
  description: Deep dive into Hyper Vectors, Neural Associations, and Memory architecture in RiceDB.
---

RiceDB is designed around four key pillars that enable robust AI agents.

---

## 1. Long-Term Memory (Hyper Vectors & Associations)

To make intelligent decisions, agents need access to vast amounts of persistent knowledge. RiceDB unifies two powerful paradigms to create a robust Long-Term Memory system.

### Hyper Vectors

Enable high-fidelity semantic search. Agents can "recall" information based on meaning rather than just keywords.

- **High Dimensionality**: Data is projected into thousands of dimensions, capturing subtle nuances in meaning.
- **Noise Tolerance**: The system is robust to imperfect queries or noisy data.
- **Example**: Searching for "legal precedent for copyright" matches "IP infringement case law" even without shared keywords.

### Neural Associations

Encodes relationships directly into the high-dimensional space. Unlike traditional graphs that use rigid pointers, RiceDB uses fluid associations.

- **Implicit Linking**: Relationships are discovered based on usage and context, not just manual entry.
- **Path Navigation**: Agents can "follow" a thought process from one concept to another.
- **Example**: Identifying that "Project X" is associated with "Team Alpha" and "Budget 2024" without explicit foreign keys.

::callout{icon="i-lucide-network" color="primary"}
**Structural Reasoning**: By combining these, agents can find a starting point via semantic search and then navigate associations to uncover deep, non-obvious context.
::

---

## 2. Working Memory (Scratchpad)

Just like humans have short-term memory for the task at hand, agents need a fast, ephemeral space for active context.

### Key Characteristics

- **High-Velocity**: Optimized for the rapid read/write cycles of an active agent loop (latency < 1ms).
- **Context-Aware**: Keeps current conversation history and intermediate "thoughts" distinct from long-term knowledge.
- **Time-Ordered**: Essential for maintaining the sequence of a conversation or execution plan.

### Session Management

- **Isolation**: Create separate memory sessions for different agent tasks (e.g., `task-123`, `chat-user-456`).
- **Auto-Expiry**: Set Time-To-Live (TTL) policies so old context doesn't clutter memory.

---

## 3. Access Control Lists (ACL)

In multi-user or multi-agent environments, data isolation is critical.

### The Problem

Traditional vector databases often lack fine-grained security. Filtering results _after_ search is slow and insecure.

### The RiceDB Solution

- **Zero-Latency Checks**: Permissions are encoded into the search index itself.
- **Document-Level Granularity**: Control `read`, `write`, and `delete` permissions per user and per document.
- **Bitmap Indexing**: Uses efficient bitwise operations to filter millions of documents instantly.

---

## 4. Hyperdimensional Computing (HDC)

Under the hood, RiceDB uses advanced Hyperdimensional Computing techniques.

### What is it?

A computing paradigm inspired by how the brain works, using large holographic vectors rather than numerical matrices.

### Why it matters?

- **Efficiency**: Compresses complex data structures into fixed-size vectors, reducing memory footprint.
- **Speed**: Operations like "binding" (combining concepts) are single-pass mathematical operations.
- **Reliability**: Highly tolerant to hardware faults or bit-flips.

::tip
You don't need to understand HDC math to use RiceDB, but it powers the speed and efficiency of the system.
::
