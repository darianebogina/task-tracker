import type {Priority, Status} from "../types.ts";

export interface ITask {
    readonly id: number;
    title: string;
    status: Status;
    priority: Priority;

    getInfo(): string;
}

export abstract class BaseTask implements ITask {
    static #counter = 0;

    readonly #id: number;
    #priority: Priority;

    protected readonly createdAt: Date;

    title: string;
    status: Status;

    constructor(title: string, status: Status, priority: Priority) {
        this.#id = BaseTask.#counter += 1;
        this.title = title;
        this.status = status;
        this.#priority = BaseTask.#validatePriority(priority);
        this.createdAt = new Date();
    }

    get id() {
        return this.#id;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value: Priority) {
        this.#priority = BaseTask.#validatePriority(value);
    }

    static compareByPriority(a: ITask, b: ITask) {
        return a.priority - b.priority;
    }

    static #validatePriority(value: Priority) {
        if (value < 1 || value > 5) {
            throw new RangeError("Приоритет должен быть целым числом от 1 до 5");
        }
        return value;
    }

    protected baseInfo() {
        const created = this.createdAt.toLocaleDateString("ru-RU");
        return `#${this.id} ${this.title} | статус: ${this.status} | приоритет: ${this.priority} | создана: ${created}`;
    }

    abstract getInfo(): string;
}
