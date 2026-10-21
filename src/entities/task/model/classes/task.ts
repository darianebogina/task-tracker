import {BaseTask, type BaseTaskParams} from "./base-task.ts";

export type TaskParams = BaseTaskParams & {
    deadline: Date;
};

export class Task extends BaseTask {
    deadline: Date;
    readonly kind = "task";

    constructor({deadline, ...params}: TaskParams) {
        super(params);
        if (deadline.getTime() < this.creationDate.getTime()) {
            throw new RangeError("Дедлайн не может быть раньше даты создания задачи");
        }
        this.deadline = deadline;
    }
}
