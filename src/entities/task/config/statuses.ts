import type {Status} from "../model";

export const STATUS_TITLES: Record<Status, string> = {
    todo: "К выполнению",
    in_progress: "В работе",
    done: "Готово",
};
