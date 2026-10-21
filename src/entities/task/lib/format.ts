import type {TaskVariant, TaskKind} from "../model";
import {STATUS_TITLES} from "../config/statuses.ts";

const TASK_KIND_LABELS: Record<TaskKind, string> = {
    task: "Задача",
    bug: "Баг",
};

const formatDate = (date: Date) => date.toLocaleDateString("ru-RU");

export const formatTaskDetails = (task: TaskVariant) => {
    switch (task.kind) {
        case "bug":
            return `Критичность: ${task.severity}`;
        case "task":
            return `Дедлайн: ${formatDate(task.deadline)}`;
        default: {
            throw new Error('Неизвестный тип задачи');
        }
    }
};

export const formatTaskInfo = (task: TaskVariant) => {
    const label = TASK_KIND_LABELS[task.kind];
    const status = STATUS_TITLES[task.status];
    return `[${label} #${task.id} ${task.title} | статус: ${status} | приоритет: ${task.priority} | создана: ${formatDate(task.createdAt)}] | ${formatTaskDetails(task)}`;
};