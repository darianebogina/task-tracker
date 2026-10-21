import type {Task} from "./task.ts";
import type {Bug} from "./bug.ts";

export {BaseTask, type ITask, type BaseTaskParams} from "./base-task.ts";
export {Task, type TaskParams} from "./task.ts";
export {Bug, type BugParams} from "./bug.ts";

export type TaskVariant = Task | Bug;
