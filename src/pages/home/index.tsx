import {useState} from "react";
import {TaskBoard} from "@widgets/task-board";
import {MoveTaskButtons} from "@features/move-task";
import type {TaskVariant, ITask, Status} from "@entities/task";
import styles from "./styles.module.css";

type HomePageProps = {
    initialTasks: TaskVariant[];
};

export const HomePage = ({initialTasks}: HomePageProps) => {
    const [tasks, setTasks] = useState(initialTasks);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedTask = tasks.find((task) => task.id === selectedId) ?? null;

    const handleSelect = (task: TaskVariant) => {
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
                <MoveTaskButtons
                    status={selectedTask?.status ?? null}
                    onMove={(status) => selectedTask && handleMove(selectedTask, status)}
                />
            </header>
            <TaskBoard tasks={tasks} selectedId={selectedId} onSelect={handleSelect}/>
        </>
    );
};
