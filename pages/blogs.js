import Blog from '../components/Home/BlogSection.js'

const {CONTENT_API_KEY,BLOG_URL} = process.env

async function getPosts(){
    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`).then((res)=>res.json())
    return res
}

export async function getStaticProps()
{
  const posts = await getPosts()
  return{
    props:posts,
    revalidate: 60
  }
}

export default function blog(props) {
    return (
        <>
          <Blog posts={props.posts} title="Our blogs" more={false}/>
        </>
      )
}