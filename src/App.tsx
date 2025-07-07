import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./features/home"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<></>} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App

