import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login";
import SideBar from "./Components/SideBar";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<SideBar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
