import {BaseTask, STATUSES, type ITask} from "@entities/task/model";
import {BoardColumn} from "./board-column";
import styles from "./styles.module.css";

type TaskBoardProps = {
    tasks: ITask[];
    selectedId: number | null;
    onSelect: (task: ITask) => void;
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
                        .toSorted(BaseTask.compareByPriority)}
                    selectedId={selectedId}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};
