import {BaseTask, type BaseTaskParams} from "./base-task.ts";

export type TaskParams = BaseTaskParams & {
    deadline: Date;
};

export class Task extends BaseTask {
    deadline: Date;
    readonly kind = "task";

    constructor({deadline, ...params}: TaskParams) {
        super(params);
        this.deadline = deadline;
    }
}
