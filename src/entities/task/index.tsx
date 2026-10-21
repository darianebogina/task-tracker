import clsx from "clsx";
import {type ITask} from "./model";
import styles from "./styles.module.css";

type TaskCardProps = {
    task: ITask;
    isSelected?: boolean;
    onClick?: () => void;
};

export const TaskCard = ({task, isSelected = false, onClick}: TaskCardProps) => {
    return (
        <article
            className={clsx(styles.card, styles[task.kind], isSelected && styles.selected)}
            title={task.getInfo()}
            onClick={onClick}
        >
            <h3 className={styles.title}>{task.title}</h3>
            <p className={styles.meta}>Приоритет: {task.priority}</p>
            <p className={styles.meta}>{task.getDetails()}</p>
        </article>
    );
};
