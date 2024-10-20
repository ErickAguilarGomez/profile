
import Datacertificates from "../data/Datacertificates";
export default function Attestation() {
    return (
        <>
            <div className="w-full bg-black">
                <h2 className="text-white text-center rajdhani text-4xl tracking-widest bg-black">
                    CERTIFICADOS
                </h2>
            </div>

            <div className="w-[100%] flex justify-center items-center bg-black">
                <div className="w-[90%] bg-black flex flex-col justify-center">
                    <div className="overflow-hidden py-5 bg-black relative ">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10" />

                        <div className="flex w-[200%] animate-scroll">
                            <div className="flex space-x-4 w-[50%]">
                                {Datacertificates.length > 0 && Datacertificates.map((certi, index) => (
                                    <img
                                        key={index}
                                        src={certi.imageUrl}
                                        className="w-52 h-24"
                                        alt={certi.title}
                                    />
                                ))}
                            </div>

                            <div className="flex space-x-4 w-[50%]">
                                {Datacertificates.length > 0 && Datacertificates.map((certi, index) => (
                                    <img
                                        key={index}
                                        src={certi.imageUrl}
                                        className="w-52 h-24"
                                        alt={certi.title}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        {Datacertificates.map((cert, index) => (
                            <div key={index} className="flex w-[100%] rounded-md shadow-md bg-black items-center justify-center ">
                                <div className="flex items-center w-3/4 border-b border-gray-600">
                                    <div className="flex w-3/4">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-10 h-10 text-white mr-2" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M246,128a54,54,0,1,0-92,38.32V224a6,6,0,0,0,8.68,5.37L192,214.71l29.32,14.66A6,6,0,0,0,224,230a5.93,5.93,0,0,0,3.15-.9A6,6,0,0,0,230,224V166.32A53.83,53.83,0,0,0,246,128Zm-96,0a42,42,0,1,1,42,42A42,42,0,0,1,150,128Zm68,86.29-23.32-11.66a6,6,0,0,0-5.36,0L166,214.29v-39a53.87,53.87,0,0,0,52,0ZM134,192a6,6,0,0,1-6,6H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216a14,14,0,0,1,14,14,6,6,0,0,1-12,0,2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V184a2,2,0,0,0,2,2h88A6,6,0,0,1,134,192Zm-16-56a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12h40A6,6,0,0,1,118,136Zm0-32a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12h40A6,6,0,0,1,118,104Z"></path>
                                        </svg>
                                        <div className="flex flex-col ">
                                            <span className="font-bold text-lg text-white">{cert.title}</span>
                                            <span className="text-base font-color">{cert.issuer}</span>
                                        </div>
                                    </div>

                                    <a href={cert.link} className="flex w-1/4 justify-end my-2" target="_blank" rel="noopener noreferrer">
                                        <img className="rounded-md w-24 h-auto" src={cert.imageUrl} alt={cert.title} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}
