import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Details from './pages/Details'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/event/:id",
    element: <Details />
  }
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
