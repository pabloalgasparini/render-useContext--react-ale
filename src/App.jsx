import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  const user = {
    isLogged: true,
    username: 'zeus'
  }

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];

  return (
    <Register/>
    // <AuthContext.Provider value={{
    //   user,
    //   tasks
    // }}>
    //   <AppRouter />
    // </AuthContext.Provider>
  )
}

export default App
