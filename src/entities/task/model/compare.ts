import type {ITask} from "./classes/index.ts";

export const compareByPriority = (a: ITask, b: ITask) => a.priority - b.priority;
