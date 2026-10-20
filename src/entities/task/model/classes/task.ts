import type {Priority, Status} from "../types.ts";
import {BaseTask} from "./base-task.ts";

export class Task extends BaseTask {
    deadline: Date;

    constructor(title: string, status: Status, priority: Priority, deadline: Date) {
        super(title, status, priority);
        this.deadline = deadline;
    }

    getInfo() {
        const deadline = this.deadline.toLocaleDateString("ru-RU");
        return `[Задача ${this.baseInfo()}] | дедлайн: ${deadline}`;
    }
}
