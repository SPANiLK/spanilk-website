import Image from 'next/image'

export default function WhatWeDoCard(props) {
  return (
    <div className="mt-16 py-4 pb-10 px-4 bg-white sm:w-full md:w-10/12 bg-white rounded-xl shadow-lg hover:shadow-xl transform md:hover:scale-110 transition duration-500 md:mx-auto">
        <div className="w-sm">
            <Image src={props.ImageUrl} alt={props.ImageDescription} width={300}
                height={300} className="mx-16"/>
            <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">{props.Title}</h1>
                <p className="mt-4 text-gray-600">{props.Description}</p>
            </div>
            {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200 object-right-bottom">MORE</button> */}
        </div>
    </div>
)};