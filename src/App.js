import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Product from './Pages//Product/Product'
import Products from './Pages//Products/Products'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import './app.scss'

const Layout = () => {
  return (
    <div className='app'>
      <NavBar className='nav' />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
