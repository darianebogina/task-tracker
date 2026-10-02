import {BaseTask, type ITask} from "@entities/task/model";
import {BOARD_STATUSES} from "./config/columns.ts";
import {BoardColumn} from "./board-column";
import styles from "./styles.module.css";

type TaskBoardProps = {
    tasks: ITask[];
}

export const TaskBoard = ({tasks}: TaskBoardProps) => {
    return (
        <div className={styles.board}>
            {BOARD_STATUSES.map((status) => (
                <BoardColumn
                    key={status}
                    status={status}
                    tasks={tasks
                        .filter((task) => task.status === status)
                        .toSorted(BaseTask.compareByPriority)}
                />
            ))}
        </div>
    );
};
