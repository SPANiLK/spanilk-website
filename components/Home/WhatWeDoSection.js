import Card from '../Cards/WhatWeDoCard'

export default function WhatWeDo() {

  var servicesList = [
  {
    Title:"Web Development",
    ImageUrl:"/programming-amico.svg",
    Description:"We design and develop beautiful looking responsive web applications keeping speed, UI, UX and Brand Value in top priority."
  },
  {
    Title:"E-Commerce Development",
    ImageUrl:"/online-groceries-amico.svg",
    Description:"Take your store online, List all your products and accept card payments on your website straight to your bank account."
  },
  {
    Title:"Mobile App Development" ,
    ImageUrl:"/mobile-development-pana.svg",
    Description:"We develop high performing beautiful apps for Android and iOS using either Native or Xamarin, React Native and Flutter, choice is yours"
  },
  {
    Title:"Web and Logo Design",
    ImageUrl:"/circles-pana.svg",
    Description:"Great design has an amazingly awesome effect on any business. Upgrade your business to brand.  Standout with a premium graphics design."
  },
  {
    Title:"Game Development" ,
    ImageUrl:"/game-pana.svg",
    Description:"Looking to develop a game? We are here to help, we develop games with best experience for multiple platforms including PCs, Consoles and Mobile Devices."
  },
  {
    Title:"Social Media Management",
    ImageUrl:"/mobile-marketing-pana.svg",
    Description:"Scaling your company equals scaling your social media, we work actively with you to help you reach new audiences every moment"
  }]
  return (
    <div className="bg-gray-100 text-gray-800 leading-loose py-20">
      <div className="container mx-auto px-2">
        <div className="flex flex-col text-center">
          <h1 className="pt-8 text-5xl text-center">
            What we do best
          </h1>
          <div className="pt-8 grid md:grid-cols-3 sm:grid-cols-1 sm:gap-5 xl:gap-10 text-center">
          {servicesList.map((element,index) => 
             <Card key={index} Title={element.Title} ImageUrl={element.ImageUrl} Description={element.Description}/>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}