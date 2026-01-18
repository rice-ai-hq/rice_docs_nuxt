---
title: API Reference
description: API Reference for Rice Node SDK.
---

# API Reference

## Client

```typescript
class Client {
  constructor(options?: { configPath?: string; runId?: string });
  async connect(): Promise<void>;
  get storage(): StorageClient;
  get state(): StateClient;
}
```

## Storage

```typescript
interface StorageClient {
  insert(id: string, text: string, metadata?: object): Promise<InsertResult>;
  search(
    query: string,
    limit?: number,
    offset?: number,
  ): Promise<SearchResult[]>;
  delete(id: string): Promise<void>;
  health(): Promise<string>;
  // ... additional graph operations
}
```

## State (AI Agent Memory)

```typescript
interface StateClient {
  // Core Memory
  focus(content: string): Promise<string>;
  drift(): Promise<any[]>;
  commit(
    input: string,
    output: string,
    options?: CommitOptions,
  ): Promise<boolean>;
  reminisce(query: string, limit?: number): Promise<any[]>;

  // Working Memory (Variables)
  setVariable(name: string, value: any, source?: string): Promise<boolean>;
  getVariable(name: string): Promise<Variable>;
  listVariables(): Promise<Variable[]>;
  deleteVariable(name: string): Promise<boolean>;

  // Concepts
  defineConcept(name: string, schema: object): Promise<boolean>;
  listConcepts(): Promise<Concept[]>;

  // Goals
  addGoal(
    description: string,
    priority?: string,
    parentId?: string,
  ): Promise<Goal>;
  updateGoal(goalId: string, status: string): Promise<boolean>;
  listGoals(statusFilter?: string): Promise<Goal[]>;

  // Actions
  submitAction(
    agentId: string,
    actionType: string,
    details: any,
  ): Promise<ActionResult>;
  getActionLog(
    limit?: number,
    actionTypeFilter?: string,
  ): Promise<ActionLogEntry[]>;

  // Decision Cycles
  runCycle(
    agentId: string,
    candidates?: ActionCandidate[],
  ): Promise<CycleResult>;
  getCycleHistory(limit?: number): Promise<CycleResult[]>;

  // Session Management
  setRunId(runId: string): void;
  deleteRun(): Promise<boolean>;

  // Skills
  trigger(skillName: string): Promise<number>;
}
```
