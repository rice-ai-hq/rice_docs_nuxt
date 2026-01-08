---
title: Building Cognitive Agents
description: Build intelligent, learning agents with Slate.
navigation:
  icon: i-lucide-bot
seo:
  title: Building Cognitive Agents with Slate
  description: Learn how to build autonomous agents that learn and remember using Slate's memory systems.
---

Slate provides the cognitive substrate for building agents that learn from experience, maintain context, and execute skills. It turns stateless LLMs into intelligent, adaptive systems.

## The Cognitive Agent Loop

To build a "Cognitive Agent", weave Slate's memory systems into your LLM loop:

1.  **Perceive**: Receive user input.
2.  **Recall (Episodic Memory)**: `client.reminisce(input)` → Add past relevant experiences to prompt (Few-Shot Learning).
3.  **Orient (Working Memory)**: `client.drift()` → Add current context/state to prompt.
4.  **Decide (LLM)**: Generate a plan or action.
5.  **Act**: Execute tool or generate response.
6.  **Learn (Episodic Memory)**: `client.commit(input, action, outcome)` → Save the result.
7.  **Update Context (Working Memory)**: `client.focus(new_state)` → Update working memory.

This loop turns a stateless LLM into an agent that learns from every interaction and maintains coherence over long conversations.

---

## Memory Comparison

| Feature       | Working Memory                                            | Episodic Memory                         |
| :------------ | :-------------------------------------------------------- | :-------------------------------------- |
| **Purpose**   | Current task state, active context                        | Past experiences, learning history      |
| **Retention** | Short-term (decays if not accessed)                       | Long-term (permanent)                   |
| **Retrieval** | Attention-sorted (`drift`)                                | Semantic similarity (`reminisce`)       |
| **Use Case**  | Conversation history, scratchpad, current task            | Few-shot learning, preference recall    |

---

## Code Example: Full Agent Loop

### Node.js / TypeScript

```typescript
import { CortexClient } from "slate-client";

const client = new CortexClient("grpc.your-instance-id.slate.tryrice.com:80", "your-token", "my-agent");

async function agentLoop(userInput: string) {
  // 1. RECALL: Check if we've handled something similar before
  const pastExperiences = await client.reminisce(userInput, 3);
  
  // 2. ORIENT: Get current context from working memory
  const currentContext = await client.drift();
  
  // 3. DECIDE & ACT: Build prompt with context and call LLM
  const prompt = buildPrompt(userInput, currentContext, pastExperiences);
  const response = await llm.generate(prompt);
  
  // 4. LEARN: Record this experience for future reference
  await client.commit(
    userInput,                    // Input
    response,                     // Outcome
    { action: "respond", reasoning: "User query" }
  );
  
  // 5. UPDATE CONTEXT: Add new information to working memory
  await client.focus(`Handled: ${userInput}`);
  
  return response;
}
```

### Python

```python
from slate_client import CortexClient

client = CortexClient(address="grpc.your-instance-id.slate.tryrice.com:80", token="your-token", run_id="my-agent")

def agent_loop(user_input: str) -> str:
    # 1. RECALL: Check if we've handled something similar before
    past_experiences = client.reminisce(user_input, limit=3).traces
    
    # 2. ORIENT: Get current context from working memory
    current_context = client.drift().items
    
    # 3. DECIDE & ACT: Build prompt with context and call LLM
    prompt = build_prompt(user_input, current_context, past_experiences)
    response = llm.generate(prompt)
    
    # 4. LEARN: Record this experience for future reference
    client.commit(
        user_input,  # input
        response,  # outcome
        action="respond",
        reasoning="User query"
    )
    
    # 5. UPDATE CONTEXT: Add new information to working memory
    client.focus(f"Handled: {user_input}")
    
    return response
```

---

## Using Procedural Memory for Deterministic Tools

When your agent needs to execute deterministic operations, use Procedural Memory:

```typescript
// Node.js
const taxResult = await client.trigger("calculate_tax");
```

```python
# Python
tax_result = client.trigger("calculate_tax")
```

This keeps complex calculations server-side, sandboxed, and consistent.

---

## Best Practices

::callout{icon="i-lucide-lightbulb" color="primary"}
**Commit Often**: Record every meaningful interaction as a trace. This builds a rich experience history for few-shot learning.
::

::callout{icon="i-lucide-clock" color="amber"}
**Let it Decay**: Don't overload working memory. Trust the decay mechanism to naturally prioritize recent, relevant context.
::

::callout{icon="i-lucide-brain" color="blue"}
**Structure Your Traces**: Use consistent action names and clear reasoning. This improves retrieval quality when reminiscing.
::


