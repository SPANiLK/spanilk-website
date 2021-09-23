import Blog from '../components/Home/BlogSection.js'
import Head from 'next/head'

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
        <div>
          <Head>
            <title>SPANiLK - Our Blogs</title>
          </Head>
          <Blog posts={props.posts} title="Our blogs" more={false}/>
        </div>
      )
}