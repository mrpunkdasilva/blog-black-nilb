
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import About from './pages/About'
import Auth from './pages/Auth'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
          <Route 
            path="/create-post" 
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
