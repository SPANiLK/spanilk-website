import Logo from "../public/logo wide.svg";
import Head from 'next/head'
import Link from 'next/link'
import Contact from '../public/contact.svg'
import Projects from '../public/projects.svg'
import Blog from '../public/blog.svg'
import Home from '../public/home.svg'
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className="bg-matteBlack sticky top-0 z-50">
             <Head>
                <title>SPANiLK - A Software Development Company</title>
                <meta name="description" content="SPANiLK - A software development company" />
                <link rel="icon" href="/logo_small_circle.png" />
            </Head>
            <div className="md:px-10 mx-auto">
                <div className="flex justify-between">

                    {/* logo */}
                    <div className="flex items-center">
                        <Link href="/" as="">
                            <a>
                                <Logo className="h-14" />
                            </a>
                        </Link>
                    </div>

                    {/* primary nav */}
                    <div className="hidden md:flex flex items-center space-x-8">
                        <Link href="/projects" className="active:text-red-200" >
                            <a className="text-gray-200 py-5 hover:text-primary">Projects</a>
                        </Link>
                        <Link href="/blogs">
                            <a className="text-gray-200 py-5 hover:text-primary">Blog</a>
                        </Link>
                        <Link href="/contact">
                            <a className="text-gray-200 py-5 hover:text-primary">Contact</a>
                        </Link>
                    </div>

                    {/* secondary nav */}
                    <div className="px-2 md:px-0 md:flex flex items-center">
                        <button>
                            <Link href="/contact">
                                <a href="" className="py-3 px-5 bg-primary text-gray-900 font-medium rounded hover:bg-primaryDark hover:text-gray-100 transition duration-300">Let&apos;s Talk</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div className="md:hidden">
                <nav className="fixed bottom-0 inset-x-0 bg-primary flex justify-between text-sm text-gray-700 py-0">
                    <Link href="/">
                        <a className={`${router.pathname=="/"?'bg-matteBlack text-gray-100':''} w-full block py-2 px-3 text-center hover:bg-matteBlack hover:text-gray-100`}>
                            <Home  className="mx-auto h-7 w-7 mb-1"/>
                            Home
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={`${router.pathname=="/projects"?'bg-matteBlack text-gray-100':''} w-full block py-2 px-3 text-center hover:bg-matteBlack hover:text-gray-100`}>
                            <Projects  className="mx-auto h-7 w-7 mb-1"/>
                            Projects
                        </a>
                    </Link>
                    <Link href="/blogs">
                    <a className={`${router.pathname=="/blogs"?'bg-matteBlack text-gray-100':''} w-full block py-2 px-3 text-center hover:bg-matteBlack hover:text-gray-100`}>
                        <Blog className="mx-auto h-7 w-7 mb-1"/>
                        Blog
                    </a>
                    </Link>
                    <Link href="/contact">
                        <a className={`${router.pathname=="/contact"?'bg-matteBlack text-gray-100':''} w-full block py-2 px-3 text-center hover:bg-matteBlack hover:text-gray-100`}>
                            <Contact className="mx-auto h-7 w-7 mb-1"/>
                            Contact
                        </a>
                    </Link>
                </nav>
            </div>
        </nav>
    )
}
export default Navbar;