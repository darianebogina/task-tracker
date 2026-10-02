import {Bug, type ITask, Task} from "@entities/task/model";

export const MOCK_TASKS: ITask[] = [
    new Task('Сверстать шапку', 'todo', 3, new Date('2026-10-10')),
    new Bug('Не сохраняется фильтр', 'todo', 1, 'major'),
    new Task('Настроить роутинг', 'todo', 2, new Date('2026-10-15')),
    new Task('Сделать карточку задачи', 'in_progress', 2, new Date('2026-10-05')),
    new Bug('Опечатка в заголовке', 'in_progress', 5, 'minor'),
    new Task('Инициализировать проект', 'done', 1, new Date('2026-09-28')),
    new Task('Описать типы задач', 'done', 4, new Date('2026-09-30')),
]
