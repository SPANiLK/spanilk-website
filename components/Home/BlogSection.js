import BlogCard from '../Cards/BlogCard.js'
import Link from 'next/link'

function Blog(props) {
  const posts = props.posts;
  return (
    <div className="bg-gray-100 text-gray-800 leading-loose py-20">
      <div className="container mx-auto px-2">
        <div className="flex flex-col text-center">
          <h1 className="pt-8 text-5xl text-center">
                {props.title}          
            </h1>
          <div className="pt-8 grid md:grid-cols-auto lg:grid-cols-3 sm:grid-cols-1 sm:gap-5 xl:gap-10 md:gap-x-4 text-center self-center">
            {posts.map((element,index)=>
                <Link href="/post/[slug]" key={index} as={`/post/${element.slug}`}>
                  <a> <BlogCard post={element}/></a>
                </Link>
            )}
          </div>
          <button className={`${props.more?'visible':'invisible'} my-10 w-auto`}>
              <Link href="/blogs">
                  <a className="py-3 px-5 bg-primary text-gray-100  font-medium rounded hover:bg-primaryDark hover:text-gray-300 transition duration-300">See more</a>
              </Link>
          </button>
        </div>
      </div>
    </div>
  )
} 

export default Blog 