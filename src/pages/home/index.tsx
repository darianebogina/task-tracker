import {TaskBoard} from '@widgets/task-board'
import {MOCK_TASKS} from "@pages/home/lib.ts";

export const HomePage = () => {
    return (
        <>
            <h1>Task Tracker</h1>
            <TaskBoard tasks={MOCK_TASKS}/>
        </>
    )
};
