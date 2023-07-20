import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import CategoriesPage from './pages/CategoriesPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />

        <Route path={'/'} element={<MainLayout />}>
          <Route path={'/'} element={<MainPage />} />

          <Route path={'/users'} element={<UsersPage />} />

          <Route path={'/categories'} element={<CategoriesPage />} />

          <Route path={'/tasks'} element={<TasksPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
