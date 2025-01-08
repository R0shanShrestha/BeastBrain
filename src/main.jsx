import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrainContext from "./context/BrainContext.jsx";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
createRoot(document.getElementById("root")).render(
  <BrainContext>
    <RouterProvider router={routing} />
  </BrainContext>
);
