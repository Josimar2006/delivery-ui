import { createBrowserRouter } from "react-router-dom";
import Root from "./components/root";
import Home from "./pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/delivery',
        element: <Root />,
        children: [
            { path: '', element: <Home />}
        ]
    }
])