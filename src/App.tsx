import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import  CustomNavbar  from './components/CustomNavbar';
import MainData from './components/MainData';
import Project from './components/Project';
import Tecnologies from './components/Tecnologies';

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
        </div>
        </>
    );
}

export default App;
