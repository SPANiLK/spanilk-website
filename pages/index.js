import HeroSection from '../components/Home/HeroSection'
import WhatWeDo from '../components/Home/WhatWeDoSection'
import OurProjects from '../components/Home/OurProjectsSection'
import Testimony from '../components/Home/TestimonySection.js'
import Blog from '../components/Home/BlogSection.js'

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