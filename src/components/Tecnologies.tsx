
import TecnologyIcon from "../data/TecnologyIcon"
export default function Tecnologies() {
    return (
        <>
            <div className="w-full bg-black">
                <h2 className="text-white text-center rajdhani text-4xl tracking-widest bg-black">TECNOLOGIAS</h2>
            </div>
            <div className="w-full bg-black flex justify-center">
                <div className="w-3/4 flex flex-wrap justify-center">
                    {TecnologyIcon.length > 0 && TecnologyIcon.map(icon => (
                        <div key={icon.name} className="mx-auto w-28 flex justify-center flex-col border-transparent custom-xborder p-4">
                            <img src={icon.image} alt={icon.name} />
                            <h3 className="text-white text-center">{icon.name} </h3>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}
