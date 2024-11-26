import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import DefaultLayout from "./DefaultLayout.jsx";
import PostLayout from './PostLayout.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts">
              <Route index element={<Posts />} />
              <Route path=":id" element={<PostLayout />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App