import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./features/home"
import Shop from "./features/shop"
import Categories from "./features/shop/content/Categories"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<></>} />
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />}>
          <Route path="categories/:categoryId/*" element={<Categories />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App

