import DataProject from "../data/DataProject";
export default function Project() {


  return (
    <>
      <div className="w-full bg-black pt-20" id="projects">
        <h2 className="text-white text-center rajdhani text-4xl tracking-widest bg-black">
          PROYECTOS
        </h2>
      </div>

      <div className="w-full bg-black flex flex-wrap items-center justify-center flex-col md:flex-row gap-6 pt-20">
        {DataProject.map((project, index) => (
          <div
            key={index}
            className="flex w-1/2 h-auto  md:h-52  md:w-96 custom-rborder  flex-col md:flex-row"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto md:h-full md:w-1/2 rounded"
            />
            <div className="flex flex-col flex-wrap text-center w-full md:w-1/2 justify-around">
              <span className="rajdhani text-2xl xl:text-3xl text-white">
                {project.title}
              </span>
              <div className="text-white text-xs md:text-base flex flex-col">
                <div className="flex flex-row justify-evenly flex-wrap text-center">
                  {project.tecnologies.length > 0 &&
                    project.tecnologies.map((tecno, i) => (
                      <p key={i} className="w-1/2 md:w-auto m-auto">{tecno}</p>
                    ))}
                </div>
                <div className="flex flex-row justify-center md:justify-around font-color pt-2">
                  <a href={project.page} className="flex links" target="_blank">
                    <img
                      src="https://img.icons8.com/?size=100&id=58308&format=png"
                      alt="visitar"
                      className="filter invert w-5"
                    />
                    Visitar
                  </a>
                  <a href={project.code} className="flex links" target="_blank  ">
                    <img
                      src="https://img.icons8.com/?size=100&id=62856&format=png"
                      alt="codigo"
                      className="filter invert w-5"
                    />
                    Codigo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );
}



