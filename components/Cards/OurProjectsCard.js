import Image from 'next/image'

export default function OurProjectsCard(props) {
  return (
    <a href={props.Url} target="_blank" passhref="true" rel="noopener noreferrer">
        <div className="mt-16 py-4 px-4 bg-white sm:w-full md:w-10/12 bg-white rounded-xl shadow-lg hover:shadow-color transform md:hover:scale-110 transition duration-500 md:mx-auto">
            <div className="w-sm ">
                <Image src={props.ImageUrl} alt={props.ImageDescription} width={300}
                    height={300} className="mx-16"/>
            </div>
        </div>
    </a>
)};