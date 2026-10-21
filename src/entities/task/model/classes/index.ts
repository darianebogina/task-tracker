import type {Task} from "./task.ts";
import type {Bug} from "./bug.ts";

export {type ITask} from "./base-task.ts";
export {Task} from "./task.ts";
export {Bug} from "./bug.ts";

export type TaskVariant = Task | Bug;
