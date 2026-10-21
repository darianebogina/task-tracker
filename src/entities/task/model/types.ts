export const STATUSES = ["todo", "in_progress", "done"] as const;

export type Status = typeof STATUSES[number];
export type Priority = 1 | 2 | 3 | 4 | 5;
export type Severity = "minor" | "major";

export type TaskKind = "task" | "bug";
