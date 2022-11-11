import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import CategoryPage from './pages/CategoryPage'
import Checkout from './pages/Checkout'
import Details from './pages/Details'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

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
  },
  {
    path: "/search/*",
    element: <SearchResults />
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
