import Card from '../Cards/Testimony'
import { useState } from 'react'; 
const colors = require('tailwindcss/colors')

export default function TestimonySection() {
  var testimonyList = [
    {
      clientImage:"/centralTech.svg",
      color:"#b0c79f",
      description:"Prompt response, excellent work and timely delivery. Kudos."
    }
    ]

    const [index, setIndex] = useState(0)
    function handleLeftClick(e,url)
    {
      if(testimonyList.length===0)
        setIndex(0);
      else if(index===0)
        setIndex(testimonyList.length-1);
      else
        setIndex(index-1);
    };
    function handleRightClick(e,url)
    {
      if(testimonyList.length===0)
        setIndex(0);
      else if(index<testimonyList.length-1)
        setIndex(index+1);
      else
        setIndex(0);
    };
    return (
        <div className="bg-matteBlack text-gray-200 leading-loose py-20">
          <div className="container mx-auto px-2">
            <div className="flex flex-col text-center">
              <h1 className="pt-8 text-5xl text-center">
                What our clients say
              </h1>
              <div className="pt-8 grid text-center">
                <div className="max-w-6xl mx-auto px-8 py-16 hover:bg-indigo">
                  <div className="relative">
                    <Card clientImage={testimonyList[index].clientImage} description={testimonyList[index].description} color={testimonyList[index].color}/>
                    <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
                      <button className="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg" onClick={(e)=>handleLeftClick(e,'/')}>
                        <svg className="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
                      <button className="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg" onClick={(e)=>handleRightClick(e,'/')}>
                      <svg className="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/>
                      </svg>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}