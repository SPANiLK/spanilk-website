import styles from '../styles/Home.module.css'
import Logo from "../public/logo wide.svg"
import Facebook from "../public/facebook.svg"
import Instagram from "../public/instagram.svg"
import Linkedin from "../public/linkedin.svg"
import Twitter from "../public/twitter.svg"
import Link from 'next/link'

const Footer = ()=>{
    return(
        <footer className={`${styles.footer} flex items-stretch bg-matteBlack`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 py-10 ">
                {/* logo and description */}
                <div>
                    <a href="#">
                        <Logo className="h-16"/>
                    </a>
                    <p className="text-gray-200 mr-25 md:mr-0">
                        We&apos;re a Web Development and Design Company in Nepal. We develop and design beautiful &amp; affordable web experiences for your Online Shop, Company Profile, &amp; More.  
                    </p>
                </div>

                 {/* Company */}
                 <div className="justify-self-right md:justify-self-center">
                    <div className="text-gray-400 text-lg pb-5">
                        Company
                    </div>
                   {/* primary nav */}
                   <div>
                        <p className="py-1">
                            <Link href="/projects">
                                <a className="text-gray-200 hover:text-primary">Projects</a>
                            </Link>
                        </p>
                        {/* <p className="py-1">
                            <Link href="/packages">
                                <a className="text-gray-200 hover:text-primary">Packages</a>
                            </Link>
                        </p> */}
                        <p className="py-1">
                            <Link href="/blog">
                                <a className="text-gray-200 hover:text-primary">Blog</a>
                            </Link>
                        </p>
                        <p className="py-1">
                            <Link href="/contact">
                                <a className="text-gray-200 hover:text-primary">Contact</a>
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Get in touch */}
                <div className="justify-self-right md:justify-self-center">
                    <div className="text-gray-400 text-lg pb-5">
                        Get in touch
                    </div>
                   {/* contact */}
                   <div>
                        <p className="py-1"><a href="tel:9779801811391" className="text-gray-200 hover:text-primary">Phone: +977-9801811391</a></p>
                        <p className="py-1"><a href="mailto:info@spanilk.com" className="text-gray-200 hover:text-primary">Email: info@spanilk.com</a></p>
                    </div>
                </div>

                {/* Get in touch */}
                <div className="justify-self-right md:justify-self-center">
                    <div className="text-gray-400 text-lg pb-5">
                        Connect with us
                    </div>
                   {/* social links */}
                   <div className="flex space-x-2">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/spanilk"><Facebook className="h-7"/></a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/spanilknepal"><Twitter className="h-7"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/spanilk/"><Linkedin className="h-7"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/spanilknepal/"><Instagram className="h-7"/></a>
                    </div>
                </div>

                <hr className="col-span-1 md:col-span-4 bg-red-600"/>
                <div className="text-gray-400">Copyright &copy; 2021 SPANiLK</div>
            </div>
        </footer>
    )
}
export default Footer;