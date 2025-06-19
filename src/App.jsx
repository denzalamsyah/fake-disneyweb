// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./Components/Footer";
import AppWrapper from "./Pages/AppWrapper";

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <AppRoutes />
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
