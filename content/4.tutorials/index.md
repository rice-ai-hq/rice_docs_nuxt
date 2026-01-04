---
title: Tutorials
description: Step-by-step guides for building production-ready agents with Rice Slate.
navigation:
  icon: i-lucide-graduation-cap
seo:
  title: Rice Slate Tutorials
  description: Comprehensive tutorials for building intelligent, learning AI agents with Rice Slate's memory systems.
---

Welcome to the Rice Slate tutorials. These comprehensive, course-style guides walk you through building real-world agents from scratch.

---

## What You'll Learn

Each tutorial covers the complete agent development lifecycle:

1. **Architecture Design**: Planning your agent's memory strategy
2. **Memory Integration**: Implementing Working, Episodic, Procedural, and Semantic memory
3. **Learning Loops**: Building agents that improve over time
4. **Production Patterns**: Error handling, testing, and deployment

---

## Prerequisites

Before starting these tutorials, ensure you have:

- Completed the [Getting Started](/getting-started/introduction) guide
- Familiarity with the [Core Concepts](/concepts)
- Rice Slate client installed ([Node.js or Python](/guides/connecting))
- Access to an LLM API (OpenAI, Anthropic, or similar)

---

## Available Tutorials

::card-group
  ::card
  ---
  icon: i-lucide-headphones
  title: "Tutorial 1: Customer Support Agent"
  to: /tutorials/customer-support-agent
  ---
  Build a customer support agent that learns from past tickets, maintains conversation context, and escalates appropriately. Covers multi-turn conversations, preference learning, and escalation logic.
  ::

  ::card
  ---
  icon: i-lucide-search
  title: "Tutorial 2: Research Assistant Agent"
  to: /tutorials/research-assistant
  ---
  Build a research assistant that synthesizes information across sessions, remembers user research interests, and builds a personalized knowledge graph. Covers long-term learning and cross-session context.
  ::
::

---

## Tutorial Format

Each tutorial follows a consistent structure:

| Section | Description |
| :------ | :---------- |
| **Overview** | Problem statement and what we're building |
| **Architecture** | Memory design and agent flow diagram |
| **Setup** | Project scaffolding and dependencies |
| **Implementation** | Step-by-step code walkthrough |
| **Testing** | Validating agent behavior |
| **Enhancements** | Ideas for extending the agent |

---

## Difficulty Level

These tutorials are **intermediate to advanced**. They assume familiarity with:

- Async programming (Python asyncio or Node.js promises)
- LLM API integration patterns
- Basic agent architecture concepts

::callout{icon="i-lucide-clock" color="amber"}
**Time Investment**: Each tutorial takes approximately 2-3 hours to complete thoroughly.
::
