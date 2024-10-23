import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import CustomNavbar from './components/CustomNavbar';
import MainData from './components/MainData';
import Project from './components/Project';
import Tecnologies from './components/Tecnologies';
import Attestation from './components/Attestation';
import { useEffect } from 'react';
function App() {

    useEffect(() => {
        const handleVisibilityChange = () => {
            const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement

            if (document.visibilityState === 'visible') {
                document.title = "Erick Aguilar | Portafolio";
                favicon.href = 'https://img.icons8.com/?size=100&id=GBu1KXnCZZ8j&format=png&color=000000';
            } else {
                document.title = 'Contrátame!';
                favicon.href = 'https://img.icons8.com/?size=100&id=Ky6Dbm1oUuyh&format=png&color=000000';
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);


    return (
        <>
            <div className='bg-black h-screen '>
                <CustomNavbar />
                <MainData />
                <AboutMe />
                <Tecnologies />
                <Project />
                <Attestation />
                <Contact />
            </div>
        </>
    );
}

export default App;
