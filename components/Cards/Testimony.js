import Image from 'next/image'

export default function WhatWeDoCard(props) {
  return (
    <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
      <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-75" style={{backgroundColor:props.color}}></div>
        <Image src={props.clientImage} alt={props.description} width={300}
                    height={300} className="mx-16"/>
      </div>
      <div className="flex relative lg:w-7/12 bg-white">
        <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"/>
        </svg>
        <div className="px-20 py-20 text-gray-700 text-2xl leading-relaxed items-center self-center">
          {props.description}
        </div>
      </div>
    </div>
)};