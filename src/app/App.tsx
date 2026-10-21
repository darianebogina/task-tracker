import {HomePage} from "@pages/home";
import {MOCK_TASKS} from "./mocks.ts";

export const App = () => {
    return <HomePage initialTasks={MOCK_TASKS}/>;
};
