import { useParams } from 'react-router-dom'
import './styles.css'

function Post() {
  const { id } = useParams()
  
  return (
    <article className="post">
      <h1>Post Title {id}</h1>
      {/* TODO: Add post content */}
    </article>
  )
}

export default Post