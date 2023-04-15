import { Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import News from "./pages/News"

function App() {

  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-[50px] lg:px-[100px] flex flex-col">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />}>
            <Route path=":id" element={<News />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
