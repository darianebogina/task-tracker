import {STATUSES, type Status} from "@entities/task/model";
import {MOVES} from "./config/moves.ts";
import styles from "./styles.module.css";

type MoveTaskButtonsProps = {
    status: Status | null;
    onMove: (status: Status) => void;
};

export const MoveTaskButtons = ({status, onMove}: MoveTaskButtonsProps) => {
    const index = status ? STATUSES.indexOf(status) : -1;

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
                        onClick={() => target && onMove(target)}
                        aria-label={ariaLabel}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};
