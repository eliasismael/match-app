import AppUI from "./AppUI";
import "./index.css";

import { ContextProvider } from "../Context";

function App() {
    return (
        <ContextProvider>
            <AppUI />
        </ContextProvider>
    );
}

export default App;
