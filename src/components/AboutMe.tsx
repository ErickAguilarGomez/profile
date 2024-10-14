export default function AboutMe() {
    return (
        <>
            <div className="w-full">
                <h2 className="text-white text-center rajdhani text-4xl tracking-widest bg-black">SOBRE MI</h2>
            </div>
            <div className="bg-black flex flex-wrap w-full justify-center">
                <div className="w-3/4 flex flex-wrap">
                    
                    <div className="w-full  md:w-1/2 flex items-center justify-around gap-8 flex-wrap md:flex-nowrap border-transparent custom-border p-4 ">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="font-color w-20 md:w-60" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"></path>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"></path>
                        </svg>
                        <div className="flex flex-wrap  flex-col items-center">
                            <h1 className="rajdhani text-base  md:text-xl xl:text-2xl font-color w-full text-center">QUIEN SOY</h1>
                            <p className="text-white w-full">
                                Soy Erick, un apasionado de la tecnología con enfoque en el desarrollo front-end y backend. Mi interés por la resolución de problemas y lacreatividad me ha llevado al mundo del desarrollo web. Estoyconstantemente buscando nuevas oportunidades de aprendizaje y colaboración con otros profesionales.
                            </p>
                        </div>
                    </div>

                    <div className="w-full  md:w-1/2 flex items-center justify-around gap-8 flex-wrap md:flex-nowrap border-transparent custom-border p-4">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="font-color w-20 md:w-60" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z"></path>
                            <path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"></path>
                        </svg>
                        <div className="flex flex-wrap flex-col items-center">
                            <h1 className="rajdhani text-base md:text-xl xl:text-2xl font-color w-full text-center">RESPONSIVE DESIGN</h1>
                            <p className="text-white w-full">
                                Realizo diseños responsivos que se adaptan de manera fluida a cualquier dispositivo, brindando una experiencia de usuario consistente y atractiva. Mi enfoque se centra en la versatilidad, asegurando que tu presencia digital se vea impecable tanto en pantallas de escritorio como en dispositivos móviles.                        </p>
                        </div>
                    </div>

                    <div className="w-full  md:w-1/2 flex items-center justify-around gap-8 flex-wrap md:flex-nowrap border-transparent custom-border p-4">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="font-color w-20 md:w-40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path>
                        </svg>
                        <div className="flex flex-wrap flex-col items-center">
                            <h1 className="rajdhani text-base md:text-xl xl:text-2xl font-color w-full text-center">SOFT SKILLS</h1>
                            <p className="text-white w-full">
                                Mi capacidad para trabajar en equipos ágiles se refleja en mi habilidad para adaptarme rápidamente a los cambios, colaborar de manera efectiva con los miembros del equipo y cumplir con los plazos de manera consistente.
                            </p>
                        </div>
                    </div>

                    <div className="w-full  md:w-1/2 flex items-center justify-around gap-8 flex-wrap md:flex-nowrap border-transparent custom-border p-4">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="font-color w-20 md:w-52" xmlns="http://www.w3.org/2000/svg">
                            <path d="M104,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,104,34ZM54,78h52V178H54Zm2-32h48a2,2,0,0,1,2,2V66H54V48A2,2,0,0,1,56,46Zm48,164H56a2,2,0,0,1-2-2V190h52v18A2,2,0,0,1,104,210Zm125.7-15L196.51,37.16a14,14,0,0,0-16.63-10.85L133.07,36.37A14.09,14.09,0,0,0,122.3,53l33.19,157.81a14,14,0,0,0,6.1,8.9,13.85,13.85,0,0,0,7.57,2.26,13.55,13.55,0,0,0,3-.32l46.81-10.05A14.09,14.09,0,0,0,229.7,195Zm-82.81-83.32,50.73-10.9,14.12,67.16L161,178.81Zm-6.63-31.56L191,69.19,195.15,89l-50.73,10.9Zm-4.66-32,46.8-10.05a2.18,2.18,0,0,1,.42,0,1.89,1.89,0,0,1,1.05.32,2,2,0,0,1,.89,1.31l3.75,17.82L137.79,68.34l-3.74-17.78A2.07,2.07,0,0,1,135.6,48.1Zm80.81,151.8L169.6,210a1.92,1.92,0,0,1-1.47-.27,2,2,0,0,1-.89-1.31l-3.75-17.82,50.72-10.9L218,197.43A2.07,2.07,0,0,1,216.41,199.9Z"></path>
                        </svg>
                        <div className="flex flex-wrap flex-col items-center">
                            <h1 className="rajdhani text-base md:text-xl xl:text-2xl font-color w-full text-center">ESTUDIOS</h1>
                            <p className="text-white w-full">
                                Como profesional, me destaco por mi naturaleza autodidacta y mi firme compromiso con el aprendizaje continuo. La búsqueda constante de conocimiento y la exploración de las últimas tendencias en diseño y tecnología son aspectos fundamentales en mi carrera.                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
