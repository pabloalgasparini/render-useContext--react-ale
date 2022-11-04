import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { NavBar } from "../ui/NavBar"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={ Login} />
        {/* <Route path="" element={ } />
        <Route path="" element={ } /> */}
      </Routes>
    </>
  )
}
