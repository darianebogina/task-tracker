import type {Priority, Status} from "../types.ts";

export interface ITask {
    readonly id: number;
    title: string;
    status: Status;
    readonly priority: Priority;
}

export abstract class BaseTask implements ITask {
    private static counter = 0;

    readonly #id: number;
    readonly #priority: Priority;

    public title: string;
    public status: Status;

    constructor(title: string, status: Status, priority: Priority) {
        this.#id = ++BaseTask.counter;
        this.title = title;
        this.status = status;
        this.#priority = BaseTask.validatePriority(priority);
    }

    get id(): number {
        return this.#id;
    }

    get priority(): Priority {
        return this.#priority;
    }

    private static validatePriority(value: Priority): Priority {
        if (!Number.isInteger(value) || value < 1 || value > 5) {
            throw new RangeError("Приоритет должен быть целым числом от 1 до 5");
        }
        return value;
    }

    static compareByPriority(a: ITask, b: ITask): number {
        return a.priority - b.priority;
    }
}
