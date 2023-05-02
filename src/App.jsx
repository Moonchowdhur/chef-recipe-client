import React from "react";
import Header from "./pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="md:min-h-[calc(100vh-70px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
