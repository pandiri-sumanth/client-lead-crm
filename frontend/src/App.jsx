import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Leads from "./pages/Leads"
import AddLead from "./pages/AddLead"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/add-lead" element={<AddLead />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App