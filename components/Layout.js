import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children})=>{
    return(
        <div className="md:flex md:flex-col md:h-screen">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout;