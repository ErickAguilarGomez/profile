import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import socialLinks from "../data/SocialLinks";
export default function MainData() {
    const fullText = "Full stack Developer";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/13ygx960OaXPQt58Pzn-zHZt9klV2luNy/view?usp=sharing", "_blank");
    };

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
            <hr id="main-data" />

            <div className="flex flex-col md:flex-row items-center justify-center bg-black  lg:w-3/4 m-0 p-0  lg:m-auto xl:m-auto 2xl:m-auto mt-20">
                <div className="max-w-screen-md w-full md:w-1/2 my-0 md:my-8">
                    <div className="w-full bg-black text-center">
                        <p className="text-white rajdhani text-xl md:text-3xl xl:text-4xl tracking-widest whitespace-nowrap">
                            <span className="font-color">&lt;</span> ERICK AGUILAR{" "}
                            <span className="font-color">/&gt;</span>
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 bg-black mt-4 justify-center align-center">
                        <span className="rajdhani text-lg md:text-2xl xl:text-3xl font-color">
                            {displayedText}
                        </span>
                        <span className="inline-block w-1 h-4  md:h-11 font-color-bg animate-pulse"></span>
                    </div>

                    <div className="flex items-center space-x-2 bg-black mt-4 justify-center align-center">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                {link.svg}
                            </a>
                        ))}
                        <Button
                            className="text-white border-blue-400 mx-4 md:mx-0"
                            variant="bordered"
                            onClick={handleDownload}
                        >
                            Descargar CV
                        </Button>
                    </div>
                </div>

                <div className="max-w-screen-md w-full md:w-1/2 flex justify-center lg:mt-20">
                    <img
                        className="w-52 h-52 my-4 md:w-80 md:my-0 md:h-80 object-cover rounded-full border-4 border-white"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhkfsdmPu9wcqsQDLrxBQqkCi5aSaLGmI8w&s"
                        alt="imagen de mi"
                    />
                </div>
            </div>
        </>
    );
}
