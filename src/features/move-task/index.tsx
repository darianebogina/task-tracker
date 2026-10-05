import {STATUSES, type ITask, type Status} from "@entities/task/model";
import styles from "./styles.module.css";
import {MOVES} from "./config/moves.ts";

type MoveTaskButtonsProps = {
    task: ITask | null;
    onMove: (task: ITask, status: Status) => void;
}

export const MoveTaskButtons = ({task, onMove}:MoveTaskButtonsProps) => {
    const index = task ? STATUSES.indexOf(task.status) : -1;

    return (
        <div className={styles.controls}>
            {MOVES.map(({offset, label, ariaLabel}) => {
                const target = index === -1 ? undefined : STATUSES[index + offset];

                return (
                    <button
                        key={offset}
                        type="button"
                        className={styles.button}
                        disabled={!target}
                        onClick={() => task && target && onMove(task, target)}
                        aria-label={ariaLabel}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};
