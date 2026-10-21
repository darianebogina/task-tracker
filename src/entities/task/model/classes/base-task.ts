import type {Priority, Status, TaskKind} from "../types.ts";

export interface ITask {
    readonly id: number;
    readonly kind: TaskKind;
    title: string;
    status: Status;
    priority: Priority;
    readonly createdAt: Date;
}

export abstract class BaseTask implements ITask {
    static #counter = 0;

    readonly #id: number;
    readonly #createdAt: Date;
    #priority: Priority;

    title: string;
    status: Status;

    constructor(title: string, status: Status, priority: Priority) {
        this.#id = BaseTask.#counter += 1;
        this.title = title;
        this.status = status;
        this.#priority = BaseTask.#validatePriority(priority);
        this.#createdAt = new Date();
    }

    get id() {
        return this.#id;
    }

    get createdAt() {
        return this.#createdAt;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value: Priority) {
        this.#priority = BaseTask.#validatePriority(value);
    }

    static #validatePriority(value: Priority) {
        if (value < 1 || value > 5) {
            throw new RangeError("Приоритет должен быть целым числом от 1 до 5");
        }
        return value;
    }

    abstract readonly kind: TaskKind;
}
