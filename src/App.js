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
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-category" element={<AddCategory />}></Route>
        <Route
          path="/dashboard/category-item-detailed-page/:id"
          element={<CategoryItemDetailedPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;