import type {Priority, Status, TaskKind} from "../types.ts";

export interface ITask {
    readonly id: number;
    readonly kind: TaskKind;
    title: string;
    status: Status;
    priority: Priority;
    readonly createdAt: Date;
}

export type BaseTaskParams = {
    id: number;
    title: string;
    status: Status;
    priority: Priority;
    createdAt: Date;
};

export abstract class BaseTask implements ITask {
    readonly #id: number;
    #priority: Priority;

    protected readonly creationDate: Date;

    title: string;
    status: Status;

    constructor({id, title, status, priority, createdAt}: BaseTaskParams) {
        this.#id = id;
        this.title = title;
        this.status = status;
        this.#priority = BaseTask.#validatePriority(priority);
        this.creationDate = createdAt;
    }

    get id() {
        return this.#id;
    }

    get createdAt() {
        return this.creationDate;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value: Priority) {
        this.#priority = BaseTask.#validatePriority(value);
    }

    static isValidPriority(value: number) {
        return Number.isInteger(value) && value >= 1 && value <= 5;
    }

    static #validatePriority(value: Priority) {
        if (!BaseTask.isValidPriority(value)) {
            throw new RangeError("Приоритет должен быть целым числом от 1 до 5");
        }
        return value;
    }

    abstract readonly kind: TaskKind;
}
