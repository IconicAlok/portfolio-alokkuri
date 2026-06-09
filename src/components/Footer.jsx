import { Github, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10
            border-b border-gray-700 pb-10">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">AlokKuri 
                        <span className="text-gray-400">.Dev</span>
                    </h3>
                    <p className="text:sm text-gray-400 leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Autem, eos cupiditate? Deserunt amet voluptate, 
                    totam quisquam in hic quod reprehenderit!
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Follow Me
                    </h4>
                    <div className="flex gap-4 text-xl">
                        <Link to="https://www.github.com/IconicAlok" className="hover:text-white transition">
                            <Github/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/mrityunjoy-kuri-alok" className="hover:text-white transition">
                            <Linkedin/>
                        </Link>
                        <Link href="https://www.x.com/alok-kuri" className="hover:text-white transition">
                            <Twitter/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-6 text-center text-sm text-gray-500">
         @ {new Date().getFullYear()} AlokKuri. all rights reserved.
        </div>
    </footer>
  )
}

export {Footer}