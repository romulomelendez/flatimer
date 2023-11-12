import Image from "next/image"

import flamengoLogo from "../../public/assets/flamengo-logo.png"

export const Timer: React.FC = () => {

    return (
      <section className="flex flex-col gap-1 justify-center p-2">
        <h1 className="text-white font-semibold text-6xl">365 dias</h1>
        <h1 className="text-white font-semibold text-6xl">11 horas</h1>
        <h1 className="text-white font-semibold text-6xl">24 minutos</h1>
        <h1 className="text-white font-semibold text-6xl">3 segundos</h1>

        <h4 className="text-red-800 font-normal text-4xl mt-5">Desde o último título do</h4>
        <Image src={flamengoLogo} alt="Flamengo's Logo" className="mt-5 w-80 " />
      </section>
    )
  
}