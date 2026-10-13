import type {Priority, Status} from "../types.ts";

export interface ITask {
    readonly id: number;
    title: string;
    status: Status;
    priority: Priority;

    getInfo(): string;
}

export abstract class BaseTask implements ITask {
    private static counter = 0;

    readonly #id: number;
    #priority: Priority;

    protected readonly createdAt: Date;

    public title: string;
    public status: Status;

    constructor(title: string, status: Status, priority: Priority) {
        this.#id = BaseTask.counter += 1;
        this.title = title;
        this.status = status;
        this.#priority = BaseTask.validatePriority(priority);
        this.createdAt = new Date();
    }

    get id(): number {
        return this.#id;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value: Priority) {
        this.#priority = BaseTask.validatePriority(value);
    }

    private static validatePriority(value: Priority): Priority {
        if (value < 1 || value > 5) {
            throw new Error("Приоритет должен быть целым числом от 1 до 5");
        }
        return value;
    }

    static compareByPriority(a: ITask, b: ITask) {
        return a.priority - b.priority;
    }

    protected baseInfo(): string {
        const created = this.createdAt.toLocaleDateString("ru-RU");
        return `#${this.id} ${this.title} | статус: ${this.status} | приоритет: ${this.priority} | создана: ${created}`;
    }

    abstract getInfo(): string;
}
