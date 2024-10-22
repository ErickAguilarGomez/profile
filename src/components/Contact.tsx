import socialLinks from "../data/SocialLinks";
export default function Contact() {
  return (
    <>
      <div className="w-full bg-black pt-14" id="contact-me">
        <h2 className="text-white text-center rajdhani text-4xl tracking-widest bg-black">
          CONTACTO
        </h2>
      </div>

      <div className=" flex w-[100%] bg-black justify-center  items-center flex-col lg:flex-row lg:p-14 flex-wrap">
        <div className="flex w-1/2 h-full lg:justify-start lg:w-2/5 lg:h-2/5">
          <img
            src="https://i.postimg.cc/fTQJVnzR/idea.png"
            alt="contacto"
            className="w-1/2"
          />
        </div>

        <div>
          <iframe
            id="formmy-iframe"
            title="formmy"
            width="560"
            height="560"
            src="https://formmy.app/embed/671581e42a7a083d6f9efca0"
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
            className="w-full"
          ></iframe>

          <hr className="w-full border-t border-gray-600"></hr>
          <div className="flex flex-col md:flex-row items-center justify-center bg-black  lg:w-3/4 m-0 p-0  lg:m-auto xl:m-auto 2xl:m-auto">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
