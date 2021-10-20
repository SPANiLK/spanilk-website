import HeroSection from '../components/Home/HeroSection'
import WhatWeDo from '../components/Home/WhatWeDoSection'
import OurProjects from '../components/Home/OurProjectsSection'
import Testimony from '../components/Home/TestimonySection.js'
import Blog from '../components/Home/BlogSection.js'
import { useRouter } from 'next/dist/client/router'

const {CONTENT_API_KEY,BLOG_URL} = process.env

export async function getStaticProps()
{
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&limit=6`).then((res)=>res.json())
  const posts = res
  return{
    props:posts,
    revalidate: 60
  }
}

export default function Home(props) {
  const router = useRouter()
  if (router.isFallback) {
    return(
      <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">

        <div className="w-3/4 bg-white rounded shadow-2xl rounded-lg">
          <div className="h-32 bg-gray-200 rounded-tr-lg rounded-tl-lg animate-pulse">

          </div>
          <div className="p-5">
            <div className="h-6 px-2 rounded-sm bg-gray-200 animate-pulse mb-4"></div>
            <div className="h-4 rounded-sm bg-gray-200 animate-pulse mt-4 mb-4"></div>
            
          </div>

        </div>

        </div>
      </>
    )
  }
  else{
    return (
      <>
        <HeroSection/>
        <WhatWeDo className="justify-self-center"/>
        <OurProjects className="justify-self-center" limit={3}/>
        <Testimony className="justify-self-center"/>
        <Blog posts={props.posts} title="We Say!" more={true}/>
      </>
    )
  }
}