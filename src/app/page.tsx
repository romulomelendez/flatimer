import Image from "next/image"

import { Timer } from "../components/Timer"

import flamengoLogo from "../../public/assets/flamengo-logo.png"

const Home: React.FC = () => (

  <div className="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center p-3 gap-2">
    <Timer />
    <h4 className="text-red-800 font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-5">
      Desde o último título do:
    </h4>
    <Image
      src={flamengoLogo}
      alt="Flamengo's Logo"
      className="mt-5 w-80"
      draggable={false}
      priority={true}
    />
  </div>

)

export default Home