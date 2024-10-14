import { useEffect, useState } from 'react'
import { Button } from "@nextui-org/react";

export default function MainData() {
    const fullText = 'Full stack Developer';
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText(displayedText + fullText[index]);
                setIndex(index + 1);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, [index, displayedText]);

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center bg-black  lg:w-3/4 m-0 p-0  lg:m-auto xl:m-auto 2xl:m-auto'>
                <div className='max-w-screen-md w-full md:w-1/2 my-0 md:my-8'>
                    <div className='w-full bg-black text-center'>
                        <p className='text-white rajdhani text-xl md:text-3xl xl:text-4xl tracking-widest whitespace-nowrap'>
                            <span className='font-color'>&lt;</span> ERICK AGUILAR <span className='font-color'>/&gt;</span>
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 bg-black mt-4 justify-center align-center">
                        <span className="rajdhani text-lg md:text-2xl xl:text-3xl font-color">{displayedText}</span>
                        <span className="inline-block w-1 h-4  md:h-11 font-color-bg animate-pulse"></span>
                    </div>

                    <div className="flex items-center space-x-2 bg-black mt-4 justify-center align-center">
                        <a href="mailto:your-email@example.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" width="30" height="30" className='mx-4 md:mx-0'>
                                <path d="M.5 4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V4zm1 0v1.001L8 8.5l6.5-3.5V4H1.5zM1 5.77L8 9l7-3.23v6.46L8 10.5 1 9.23V5.77z" />
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" width="30" height="30" className='mx-4 md:mx-0'>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.37 0-.18-.01-.79-.01-1.43-2.24.49-2.71-1.08-2.71-1.08-.36-.93-.88-1.18-.88-1.18-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.32.67.07-.52.28-.87.51-1.07-1.76-.2-3.62-.88-3.62-3.92 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.01-.27s1.37.09 2.01.27c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.04-1.86 3.72-3.62 3.92.29.25.55.74.55 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.44.55.37C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" width="30" height="30" className='mx-4 md:mx-0'>
                                <path d="M1.75 0C.783 0 0 .783 0 1.75v12.5C0 15.217.783 16 1.75 16h12.5C15.217 16 16 15.217 16 14.25V1.75C16 .783 15.217 0 14.25 0h-12.5zm4.563 12.813H3.812V6.5h2.5v6.313zm0-7.5h-2.5V4h2.5v1.313zm8.938 7.5h-2.5v-3.25c0-.775-.016-1.813-1.094-1.813-1.094 0-1.266.855-1.266 1.733V12h-2.5V6.5h2.438v1.1c.325-.612 1.122-1.25 2.062-1.25 2.156 0 2.5 1.445 2.5 3.318v3.145z" />
                            </svg>
                        </a>
                        <Button className='text-white border-blue-400 mx-4 md:mx-0' variant="bordered" >
                            Descargar CV
                        </Button>
                    </div>


                </div>

                <div className='max-w-screen-md w-full md:w-1/2 flex justify-center'>
                    <img
                        className='w-52 h-52 my-4 md:w-80 md:my-0 md:h-80 object-cover rounded-full border-4 border-white'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhkfsdmPu9wcqsQDLrxBQqkCi5aSaLGmI8w&s"
                        alt="imagen de mi"
                    />

                </div>
            </div>

        </>
    )
}
