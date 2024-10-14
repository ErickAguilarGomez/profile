import AboutMe from './components/AboutMe';
import  CustomNavbar  from './components/CustomNavbar';
import MainData from './components/MainData';

function App() {


    return (
        <>
        <div className='bg-black h-screen'>
        <CustomNavbar></CustomNavbar>
        <MainData></MainData>
        <AboutMe></AboutMe>
        </div>
        </>
    );
}

export default App;
