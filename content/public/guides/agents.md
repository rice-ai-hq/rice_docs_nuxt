# Building Agents with RiceDB

RiceDB is built from the ground up to support the state management needs of autonomous agents.

## Rice Agents Framework

For the fastest way to get started, we recommend using the **Rice Agents** framework. It provides a set of high-level abstractions for building agents that natively leverage RiceDB's features.

### Installation

```bash
pip install git+https://github.com/rice-ai-hq/rice_agents.git
```

- [**Rice Agents on GitHub**](https://github.com/rice-ai-hq/rice_agents) - Full documentation and examples.

---

## Agent Architecture

A typical RiceDB-powered agent operates in a loop:

1.  **Observe**: Read user input and current context from **Working Memory**.
2.  **Recall**: Query **Long-Term Memory** for relevant knowledge (Hyper Vectors) and related concepts (Associations).
3.  **Act**: Generate a response or action using an LLM.
4.  **Reflect**: Store the action and new insights back into **Working Memory**.

---

## Working Memory (Scratchpad)

One of RiceDB's most powerful features for agents is the **Working Memory** layer. This allows agents to store ephemeral context without the overhead of re-embedding or polluting the long-term Hyper Vector store.

### When to use Working Memory vs Long-Term Memory?

| Feature       | Use "Working Memory" (Scratchpad)                                 | Use "Long-Term Memory" (Hyper Vectors)  |
| :------------ | :---------------------------------------------------------------- | :-------------------------------------- |
| **Data Type** | Conversation history, current task status, intermediate thoughts. | Docs, knowledge base, past experiences. |
| **Retention** | Short-term (minutes to days).                                     | Long-term (permanent).                  |
| **Search**    | Time-ordered, Exact match.                                        | Semantic similarity.                    |
| **Speed**     | Extremely fast (no embedding).                                    | Fast (requires embedding).              |

### Code Example: The Agent Loop

Here is how you might structure a simple agent loop using RiceDB directly.

```python
from ricedb import RiceDBClient

client = RiceDBClient("localhost")
client.connect()
SESSION_ID = "task-alpha-1"

def agent_loop(user_input):
    # 1. OBSERVE: Add user input to memory
    client.memory.add(
        session_id=SESSION_ID,
        agent="user",
        content=user_input
    )

    # 2. RECALL: Get recent history + relevant long-term knowledge
    recent_history = client.memory.get(session_id=SESSION_ID, limit=5)

    # Search long-term memory for context
    knowledge = client.search(
        query=user_input,
        user_id=1,
        k=2
    )

    # 3. ACT: (Pseudo-code for LLM call)
    # prompt = construct_prompt(recent_history, knowledge)
    # response = llm.generate(prompt)
    response = f"Processed: {user_input} based on {len(knowledge)} docs."

    # 4. REFLECT: Store response back to memory
    client.memory.add(
        session_id=SESSION_ID,
        agent="bot",
        content=response
    )

    return response

# Run the loop
print(agent_loop("What is the status of Project X?"))
```

## Multi-Agent Coordination

RiceDB facilitates coordination between multiple agents using shared memory spaces and Pub/Sub.

1.  **Shared Workspace**: Multiple agents can write to the same `session_id` in memory to share progress.
2.  **Real-time Updates**: Agents can subscribe to changes on specific memory sessions to react immediately to new information (using gRPC).

```python
# Example: Watch for updates (gRPC only)
for update in client.memory.watch("task-123"):
    print(f"New activity: {update['content']}")
    # Trigger reaction logic...
```
