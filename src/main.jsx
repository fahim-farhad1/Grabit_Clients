import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./Pages/Products/Products";
import Seasonal from "./Pages/Seasonal/Seasonal";
import Offers from "./Pages/Offers/Offers";
import Contacts from "./Pages/Contact/Contacts";
import About from "./Pages/About/About";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import LoginLayout from "./Layouts/LoginLayout";
import AuthProvider from "./Components/Provider/AuthProvider";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import SingleProductsPage from "./Pages/SingleProductsPage/SingleProductsPage";
import UserDashboard from "./Layouts/UserDashboard";
import MyAccount from "./Components/UserSidebar/MyAccount/MyAccount";
import WishList from "./Components/UserSidebar/WshList/WishList";
import PriceCalculation from "./Components/Context/PriceCalculation";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <PriceCalculation>
          <BrowserRouter>
            <Routes>
              {/* main layout  */}
              <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="seasonal" element={<Seasonal />} />
                <Route path="offers" element={<Offers />} />
                <Route path="contact" element={<Contacts />} />
                <Route path="about" element={<About />} />
                <Route
                  path="/products/:category/:slug/:id"
                  element={<SingleProductsPage />}
                />
                <Route
                  path="/:category/:slug/:id"
                  element={<SingleProductsPage />}
                />
                <Route
                  path="/seasonal/:category/:slug/:id"
                  element={<SingleProductsPage />}
                />
                <Route
                  path="/offers/:category/:slug/:id"
                  element={<SingleProductsPage />}
                />
                {/* user Dashboard  */}
                <Route path="userDashboard" element={<UserDashboard />}>
                  <Route path="account" element={<MyAccount />} />
                  <Route path="wishlist" element={<WishList />} />
                </Route>
              </Route>
              {/* Auth Layout  */}
              <Route element={<LoginLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signUp" element={<SignUp />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PriceCalculation>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
