---
title: API Reference
description: API Reference for Rice Node SDK.
---

# API Reference

## Client

::code-group
```typescript [client.ts]
class Client {
  constructor(options?: { configPath?: string; runId?: string });
  async connect(): Promise<void>;
  get storage(): StorageClient;
  get state(): StateClient;
}
```

```python [client.py]
class Client:
    def __init__(self, config_path: Optional[str] = None, run_id: Optional[str] = None)
    def connect(self) -> None
    @property
    def storage(self) -> RiceDBClient
    @property
    def state(self) -> StateClient
```
::

## Storage

::code-group
```typescript [storage.ts]
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

```python [storage.py]
class RiceDBClient:
    def insert(self, node_id: str, text: str, metadata: Optional[Dict] = None) -> InsertResult
    def search(self, query: str, limit: int = 10, offset: int = 0) -> List[SearchResult]
    def delete(self, node_id: str) -> None
    def health(self) -> str
    # ... additional graph operations
```
::

## State (AI Agent Memory)

::code-group
```typescript [state.ts]
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

```python [state.py]
class StateClient:
    # Core Memory
    def focus(self, content: str) -> str
    def drift(self) -> List[Any]
    def commit(self, input_text: str, output: str, **kwargs) -> bool
    def reminisce(self, query: str, limit: int = 10) -> List[Any]

    # Working Memory
    def set_variable(self, name: str, value: Any, source: str = "explicit") -> bool
    def get_variable(self, name: str) -> Variable
    def list_variables(self) -> List[Variable]
    def delete_variable(self, name: str) -> bool

    # Concepts
    def define_concept(self, name: str, schema: Dict) -> bool
    def list_concepts(self) -> List[Concept]

    # Goals
    def add_goal(self, description: str, priority: str = "medium", parent_id: Optional[str] = None) -> Goal
    def update_goal(self, goal_id: str, status: str) -> bool
    def list_goals(self, status_filter: Optional[str] = None) -> List[Goal]

    # Actions
    def submit_action(self, agent_id: str, action_type: str, details: Dict) -> ActionResult
    def get_action_log(self, limit: int = 100, action_type_filter: Optional[str] = None) -> List[ActionLogEntry]

    # Decision Cycles
    def run_cycle(self, agent_id: str, candidates: Optional[List[Dict]] = None) -> CycleResult
    def get_cycle_history(self, limit: int = 10) -> List[CycleResult]

    # Session Management
    def set_run_id(self, run_id: str) -> None
    def delete_run(self) -> bool

    # Skills
    def trigger(self, skill_name: str) -> int
```
::
