import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/login'} element={<LoginPage/>}/>

          <Route path={'/'} element={<MainLayout />}>

            <Route path={'/'} element={<MainPage />} />

            <Route path={'/users'} element={<UsersPage />} />

          </Route>
        </Routes>
    </div>
  );
}

export default App;
