import Image from "next/image"

import { Timer } from "../components/Timer"

import flamengoLogo from "../../public/assets/flamengo-logo.png"

const Home: React.FC = () => (

  <div className="bg-slate-900 h-screen w-screen flex flex-col justify-center items-center p-3">
    <Timer />
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