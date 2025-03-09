import Image from "next/image"

import { Timer } from "../components/Timer"

import flamengoLogo from "../../public/assets/flamengo-logo.png"

const Home: React.FC = () => (

  <div className="bg-slate-900 h-screen w-screen flex justify-center items-center gap-3">
    <Image
      src={flamengoLogo}
      alt="Flamengo's Logo"
      className="mt-5 w-80"
      draggable={false}
      priority={true}
    />
    <Timer />
  </div>

)

export default Home