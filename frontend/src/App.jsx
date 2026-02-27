import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DashboardLayout from './components/dashboard/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Analytics from './pages/dashboard/Analytics'
import Races from './pages/dashboard/Races'
import Leagues from './pages/dashboard/Leagues'
import Settings from './pages/dashboard/Settings'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="Races" element={<Races />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App