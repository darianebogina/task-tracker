import type {Priority, Severity, Status} from "../types.ts";
import {BaseTask} from "./base-task.ts";

export class Bug extends BaseTask {
    severity: Severity;
    readonly kind = "bug";
    protected readonly label = "Баг";

    constructor(title: string, status: Status, priority: Priority, severity: Severity) {
        super(title, status, priority);
        this.severity = severity;
    }

    getDetails() {
        return `Критичность: ${this.severity}`;
    }
}
