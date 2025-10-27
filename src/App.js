import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddCategory from "./components/AddCategory";
import CategoryItemDetailedPage from "./components/CategoryItemDetailedPage";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/dashboard" element={<ProtectedRoute allowedRoles={["admin", "customer"]}><Dashboard /></ProtectedRoute> } />
        <Route exact path="/add-category" element={<ProtectedRoute allowedRoles={["admin"]}> <AddCategory /> </ProtectedRoute> }></Route>
        <Route
        exact
          path="/category-item-detailed-page/:id"
          element={<ProtectedRoute allowedRoles={["admin", "customer"]}> <CategoryItemDetailedPage /> </ProtectedRoute> }>
        </Route>
        <Route exact path="/cart" element={<ProtectedRoute allowedRoles={["admin", "customer"]}><Cart /></ProtectedRoute>}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;