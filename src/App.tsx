import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="styleGuide" element={<></>} />
        <Route path="/*" element={<></>} />
      </Routes>
    </Layout>
  )
}

export default App

