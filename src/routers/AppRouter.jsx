import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            {/* Colocar el componente a proteger */}

          <Login/>
          </PublicRoutes>
        } />

        {/* <Route path='/*' element={
          // Proteger las rutas privadas
        } /> */}

      </Routes>
    </BrowserRouter>
  )
}
