import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login, Dashboard, AddUser, UpdateUser, UpdatePassword } from "./pages"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route index element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/addUser" element={<AddUser />} />

        <Route path="/updateUser/:id" element={<UpdateUser />} />

        <Route path="/changePassword/:id" element={<UpdatePassword />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
