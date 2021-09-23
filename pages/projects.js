import Projects from '../components/Home/OurProjectsSection'
import Head from 'next/head'

export default function projects(props) {
    return (
        <div>
          <Head>
            <title>SPANiLK - Projects</title>
          </Head>
          <Projects limit={0}/>
        </div>
      )
}