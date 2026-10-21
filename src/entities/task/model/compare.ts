import type {ITask} from "./classes";

export const compareByPriority = (a: ITask, b: ITask) => a.priority - b.priority;
