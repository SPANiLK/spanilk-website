import Image from 'next/image'

const BlogCard = (props)=>{
    return(
        <div className="text-left bg-white p-2 w-80 my-5 w-full max-w-3xl md:my-0 sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-2 select-none">
            <div
                style={{backgroundImage:"url("+props.post.feature_image+")"}}
                className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
            >
            </div>
            <div className="flex sm:flex-1 flex-col gap-2 p-1">
                <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
                    {props.post.title}
                </h1>
                <p className="text-gray-500 text-sm sm:text-base line-clamp-3 ">
                    {props.post.custom_excerpt}
                </p>
                <div className="mt-auto text-left">
                <span className="text-sm sm:text-lg line-clamp-1 text-gray-400 ">{props.post.reading_time} min read</span>
                </div>
            </div>
        </div>
)}

export default BlogCard;
