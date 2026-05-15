import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./features/home"
import Shop from "./features/shop"
import Categories from "./features/shop/content/Categories"
import Product from "./features/shop/content/Product"
import Auth from "./features/auth"
import Register from "./features/auth/register/Register"
import Login from "./features/auth/login/Login"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<></>} />
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="shop" element={<Shop />}>
          <Route path="categories/:categoryId" element={<Categories />} />
          <Route path="product/:productId" element={<Product />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
