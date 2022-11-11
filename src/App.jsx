import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import CategoryPage from './pages/CategoryPage'
import Checkout from './pages/Checkout'
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
  },
  {
    path: "/category/:name",
    element: <CategoryPage />
  },
  {
    path: "/checkout/:id/:quantity",
    element: <Checkout />
  }
])

function App() {

  return (
    <div className="App bg-[#fffcf5]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
