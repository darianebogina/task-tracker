import clsx from "clsx";
import {Bug, Task, type ITask} from "./model";
import styles from "./styles.module.css";

type TaskCardProps = {
    task: ITask;
    isSelected?: boolean;
    onClick?: () => void;
}

export const TaskCard = ({task, isSelected = false, onClick}: TaskCardProps) => {
    const isBug = task instanceof Bug;

    return (
        <article
            className={clsx(styles.card, isBug && styles.bug, isSelected && styles.selected)}
            title={task.getInfo()}
            onClick={onClick}
        >
            <h3 className={styles.title}>{task.title}</h3>
            <p className={styles.meta}>Приоритет: {task.priority}</p>
            {isBug && <p className={styles.meta}>Критичность: {task.severity}</p>}
            {task instanceof Task && (
                <p className={styles.meta}>Дедлайн: {task.deadline.toLocaleDateString("ru-RU")}</p>
            )}
        </article>
    );
};
