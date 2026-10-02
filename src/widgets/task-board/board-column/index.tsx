import {TaskCard} from "@entities/task";
import type {ITask, Status} from "@entities/task/model";
import {STATUS_TITLES} from "../config/columns.ts";
import styles from "./styles.module.css";

type BoardColumnProps = {
    status: Status;
    tasks: ITask[];
}

export const BoardColumn = ({status, tasks}: BoardColumnProps) => {
    return (
        <section className={styles.column}>
            <h2 className={styles.title}>{STATUS_TITLES[status]} ({tasks.length})</h2>
            <ul className={styles.list}>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskCard task={task}/>
                    </li>
                ))}
            </ul>
        </section>
    );
};
