import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./features/home"
import Shop from "./features/shop"
import Categories from "./features/shop/content/Categories"
import Product from "./features/shop/content/Product"
import Auth from "./features/auth"
import Register from "./features/auth/register/Register"
import Login from "./features/auth/login/Login"
import Account from "./features/profile/account/Account"
import Orders from "./features/profile/orders/Orders"
import Profile from "./features/profile"
import Contact from "./features/contact"
import Wishlist from "./features/wishlist"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectShop, getProductsAsync } from "./features/shop/slice"

function App() {
  const dispatch = useAppDispatch()

  const { products } = useAppSelector(selectShop)

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductsAsync())
    }
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<></>} />
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="shop" element={<Shop />}>
          <Route path="categories/:categoryId" element={<Categories />} />
          <Route path="product/:productId" element={<Product />} />
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
