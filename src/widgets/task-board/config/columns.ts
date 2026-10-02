import type {Status} from "@entities/task/model";

export const BOARD_STATUSES = ["todo", "in_progress", "done"] as Status[];

export const STATUS_TITLES: Record<Status, string> = {
    todo: "К выполнению",
    in_progress: "В работе",
    done: "Готово",
};
