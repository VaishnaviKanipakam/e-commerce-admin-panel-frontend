import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddCategory from "./components/AddCategory";
import CategoryItemDetailedPage from "./components/CategoryItemDetailedPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/add-category" element={<AddCategory />}></Route>
        <Route
          exact
          path="/category-item-detailed-page/:id"
          element={<CategoryItemDetailedPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
