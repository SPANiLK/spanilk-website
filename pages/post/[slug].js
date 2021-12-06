import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Head from 'next/head'

const CONTENT_API_KEY = process.env.CONTENT_API_KEY
const BLOG_URL = process.env.BLOG_URL

async function getPost(slug) {
    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}`).then((res)=>res.json())
    const posts = res.posts
    return posts[0]
}
export async function getStaticProps(params)
{
  const post = await getPost(params.params.slug)
  return{
    props:post,
    revalidate: 1440
  }
}

export async function getStaticPaths(){
    return {
        paths:[],
        fallback: true
    }
}

export default function Post(props) {
  const router = useRouter()

  if(router.isFallback)
  {
    return <h1 className="text-center">Loading...</h1>
  }
  return (
    <>
    <Head>
        <title>{props.title} | BLOG | SPANiLK </title>
    </Head>
    <div className="mb-24">
      <h1 className="my-20 mx-30 text-4xl text-center underline ">{props.title}</h1>
      <div className="mx-20 gh-canvas gh-content" dangerouslySetInnerHTML={{__html:props.html}}></div>
    </div>
    </>
)

};
