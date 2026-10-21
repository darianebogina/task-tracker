import {STATUSES, compareByPriority, type TaskVariant} from "@entities/task/model";
import {BoardColumn} from "./board-column";
import styles from "./styles.module.css";

type TaskBoardProps = {
    tasks: TaskVariant[];
    selectedId: number | null;
    onSelect: (task: TaskVariant) => void;
};

export const TaskBoard = ({tasks, selectedId, onSelect}: TaskBoardProps) => {
    return (
        <div className={styles.board}>
            {STATUSES.map((status) => (
                <BoardColumn
                    key={status}
                    status={status}
                    tasks={tasks
                        .filter((task) => task.status === status)
                        .toSorted(compareByPriority)}
                    selectedId={selectedId}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};
