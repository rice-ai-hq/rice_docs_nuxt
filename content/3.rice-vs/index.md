---
title: Overview
description: How Rice compares to other AI memory solutions.
navigation:
  icon: i-lucide-git-compare
seo:
  title: Rice vs Alternatives
  description: Compare Rice with Zep, Mem0, Letta (MemGPT), Supermemory, and vector databases.
---

Rice represents a shift from "Memory as Storage" to "Memory as Cognition."

While the market is dominated by vector databases (storage focus) and memory layers (retrieval focus), Rice provides a complete cognitive substrate. It doesn't just store data. It manages runtime state through decay-based attention and executes deterministic skills server-side.

---

## The AI Memory Landscape

Solutions fall into three tiers:

| Tier | Examples | Focus |
| :--- | :------- | :---- |
| **Cognitive Substrates** | Rice | Manages state, execution, and memory in a unified layer |
| **Memory Layers** | Zep, Mem0 | Adds structure on top of storage to improve retrieval |
| **Storage Primitives** | Pinecone, Weaviate, Chroma | Raw vector storage requiring custom logic |

---

## Summary

| Feature | Rice | Zep | Mem0 | Supermemory | Vector DBs |
| :------ | :--: | :-: | :--: | :---------: | :--------: |
| **Memory Model** | Cognitive (4-part) | Knowledge Graph | User Facts | User Profiles | Flat Storage |
| **Context Algorithm** | Decay & Attention | Session Window | Relevance Search | Graph + Search | k-NN Search |
| **Skill Execution** | WASM | No | No | No | No |
| **Trace Storage** | Input/Action/Outcome | Chat History | Facts only | Documents | Raw Embeddings |
| **Underlying Tech** | HDC | Graph + Vectors | Vectors + Graph | Postgres + Vectors | Dense Vectors |
| **Best For** | Autonomous Agents | Knowledge Retrieval | User Personalization | Chat with Data | DIY RAG |

---

## Built for Autonomous Agents

Rice is designed for GenAI companies building autonomous agents that need to learn, adapt, and execute reliably.

::card-group
  ::card
  ---
  icon: i-lucide-brain
  title: Learn from Experience
  ---
  Episodic Memory captures every interaction as a trace. Your agents improve with each task they complete.
  ::

  ::card
  ---
  icon: i-lucide-focus
  title: Manage Attention
  ---
  Working Memory handles context with natural decay. No more prompt stuffing or manual context windows.
  ::

  ::card
  ---
  icon: i-lucide-zap
  title: Execute Deterministically
  ---
  Procedural Memory runs compiled skills server-side. Calculations are exact, not hallucinated.
  ::
::
