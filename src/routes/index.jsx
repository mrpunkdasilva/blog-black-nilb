import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import About from '../pages/About'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes