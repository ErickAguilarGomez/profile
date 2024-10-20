import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import  CustomNavbar  from './components/CustomNavbar';
import MainData from './components/MainData';
import Project from './components/Project';
import Tecnologies from './components/Tecnologies';
import Attestation from './components/Attestation';
function App() {


    return (
        <>
        <div className='bg-black h-screen '>
        <CustomNavbar/>
        <MainData/>
        <AboutMe/>
        <Tecnologies/>
        <Project/>
        <Contact/>
        <Attestation/>
        </div>
        </>
    );
}

export default App;
