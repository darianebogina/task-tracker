import type {Severity} from "../types.ts";
import {BaseTask, type BaseTaskParams} from "./base-task.ts";

export type BugParams = BaseTaskParams & {
    severity: Severity;
};

export class Bug extends BaseTask {
    severity: Severity;
    readonly kind = "bug";

    constructor({severity, ...params}: BugParams) {
        super(params);
        this.severity = severity;
    }
}
