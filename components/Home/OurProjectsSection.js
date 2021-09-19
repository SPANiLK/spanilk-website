import Card from '../Cards/OurProjectsCard'
import Projects from '../../data/OurProjects.json'

export default function OurProjects(props) {
  var projects = Projects.slice(0,props.limit==0?Projects.length:props.limit)
  return (
    <div className="bg-gray-100 text-gray-800 leading-loose py-20">
      <div className="container mx-auto px-2">
        <div className="flex flex-col text-center">
          <h1 className="pt-8 text-5xl text-center">
                Our Projects &amp; Partners          
            </h1>
          <div className="pt-8 grid md:grid-cols-3 sm:grid-cols-1 sm:gap-5 xl:gap-10 text-center">
          {
            projects.map((element,index) => 
             <Card key={index} Title={element.Title} Url={element.Url} ImageUrl={element.ImageUrl} Description={element.Description}/>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}