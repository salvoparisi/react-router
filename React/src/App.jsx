import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import DefaultLayout from "./DefaultLayout.jsx";
import PostLayout from "./PostLayout.jsx";
import { PostsProvider } from "./context/PostsContext";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts">
              <Route index element={<PostsPage />} />
              <Route path=":id" element={<PostLayout />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
