import type {Priority, Status} from "../types.ts";
import {BaseTask} from "./base-task.ts";

export class Task extends BaseTask {
    deadline: Date;
    readonly kind = "task";
    protected readonly label = "Задача";

    constructor(title: string, status: Status, priority: Priority, deadline: Date) {
        super(title, status, priority);
        this.deadline = deadline;
    }

    getDetails() {
        const deadline = this.deadline.toLocaleDateString("ru-RU");
        return `Дедлайн: ${deadline}`;
    }
}
