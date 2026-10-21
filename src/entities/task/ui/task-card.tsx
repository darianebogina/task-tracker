import clsx from "clsx";
import type {TaskVariant} from "../model";
import {formatTaskDetails, formatTaskInfo} from "../lib/format.ts";
import styles from "./styles.module.css";

type TaskCardProps = {
    task: TaskVariant;
    isSelected?: boolean;
    onClick?: () => void;
};

export const TaskCard = ({task, isSelected = false, onClick}: TaskCardProps) => {
    return (
        <article
            className={clsx(styles.card, styles[task.kind], isSelected && styles.selected)}
            title={formatTaskInfo(task)}
            onClick={onClick}
        >
            <h3 className={styles.title}>{task.title}</h3>
            <p className={styles.meta}>Приоритет: {task.priority}</p>
            <p className={styles.meta}>{formatTaskDetails(task)}</p>
        </article>
    );
};
