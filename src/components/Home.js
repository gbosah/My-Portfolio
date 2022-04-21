 import react from "react";
 import image from "../gbosah.jpg"
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
    return(
            <main className="flex-grow">       
            <section className="mx-auto flex bg-slate-100 p-9 lg:flex-row md:flex-col">
                <div className="mt-24 text-center space-y-5 mx-auto items-center">
                    <h1 className="font-extrabold text-5xl text-gray-800 mb-6">Hi, my name is Bosah Chinedu</h1>
                    <h2 className="font-mono text-4xl text-gray-400">Frontend Developer</h2>
                    <div className="flex flex-col font-light mx-24">
                    <p className='max-w-lg font-serif text-2xl text-gray-700 md:text-3xl'>I'm a full-stack developer, dedicated on creating responsive user experiances
                       utilizing high-perfomance web technologies.
                    </p>
                    </div>
                </div>
                <div className="flex justify-end pr-10 mt-14 p-5 md:mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:duration-150">
                <img src={image} alt="gbosah-picture" 
                width={400}
                objectFit='cover'
                  className="rounded-xl"              
                />
                </div>
            </section>
            <section className="bg-slate-100 ">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-5xl font-serif">Skills</h1>
                    <div className="space-x-10 text-5xl p-5 cursor-zoom-in transition duration-300 ease-in-out hover:translate-x-2">
                    <i className="fa-brands fa-html5 border-4 border-white p-4 bg-slate-50 rounded-full mr-4 text-orange-500"></i>
                    <i className="fa-brands fa-css3 border-white p-4 bg-slate-50 rounded-full mr-4 text-blue-500"></i>
                    <i className="fa-brands fa-js border-white p-4 bg-slate-50 rounded-full mr-4 text-yellow-300"></i>
                    <i className="fa-brands fa-react border-white p-4 bg-slate-50 rounded-full mr-4 text-blue-300"></i>

                    </div>
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <div>
                    <Footer />
                </div>
            </section>
    </main>
    )
}