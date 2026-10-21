import {TaskCard} from "@entities/task";
import type {TaskVariant, Status} from "@entities/task/model";
import {STATUS_TITLES} from "@entities/task/config/statuses.ts";
import styles from "./styles.module.css";

type BoardColumnProps = {
    status: Status;
    tasks: TaskVariant[];
    selectedId: number | null;
    onSelect: (task: TaskVariant) => void;
};

export const BoardColumn = ({status, tasks, selectedId, onSelect}: BoardColumnProps) => {
    return (
        <section className={styles.column}>
            <h2 className={styles.title}>{STATUS_TITLES[status]} ({tasks.length})</h2>
            <ul className={styles.list}>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskCard
                            task={task}
                            isSelected={task.id === selectedId}
                            onClick={() => onSelect(task)}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
