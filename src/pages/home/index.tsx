import {useState} from "react";
import {TaskBoard} from "@widgets/task-board";
import {MoveTaskButtons} from "@features/move-task";
import type {ITask, Status} from "@entities/task/model";
import {MOCK_TASKS} from "./lib.ts";
import styles from "./styles.module.css";

export const HomePage = () => {
    const [tasks, setTasks] = useState<ITask[]>(MOCK_TASKS);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedTask = tasks.find((task) => task.id === selectedId) ?? null;

    const handleSelect = (task: ITask) => {
        setSelectedId((id) => (id === task.id ? null : task.id));
    };

    const handleMove = (task: ITask, status: Status) => {
        task.status = status;
        setTasks((prev) => [...prev]);
    };

    return (
        <>
            <header className={styles.header}>
                <h1>Task Tracker</h1>
                <MoveTaskButtons task={selectedTask} onMove={handleMove}/>
            </header>
            <TaskBoard tasks={tasks} selectedId={selectedId} onSelect={handleSelect}/>
        </>
    );
};
