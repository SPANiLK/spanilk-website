import Blog from '../components/Home/BlogSection.js'
import Head from 'next/head'
import { useRouter } from 'next/router'

const {CONTENT_API_KEY,BLOG_URL} = process.env

export async function getStaticProps()
{
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`).then((res)=>res.json())
  const posts = res
  return{
    props:posts,
    revalidate: 60
  }
}

export default function Blogs(props) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  else{
    return (
        <div>
          <Head>
            <title>SPANiLK - Our Blogs</title>
          </Head>
          <Blog posts={props.posts} title="Our blogs" more={false}/>
        </div>
      )
    }
}