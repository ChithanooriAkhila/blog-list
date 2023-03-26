// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(blog => (
        <BlogItem blogDetails={blog} key={blog.id} />
      ))}
    </ul>
  )
}

export default BlogList
