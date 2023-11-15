import { TimerUnit } from "./TimerUnit"

type LastTitleProps = {
  lastTitle: {
    dateOfLastTitle: string,
    timeOfLastTitle: {
      hour: string | number,
      minutes: string | number,
      seconds: string | number 
    }
  }
}


export const Timer: React.FC<LastTitleProps> = async ({ lastTitle: { timeOfLastTitle: { hour, minutes, seconds } } }: LastTitleProps ) => {

  const res = await (await fetch("http://localhost:3000/lastTitle")).json()
  console.log(res)

  return (
    <section className="flex flex-col gap-1 justify-center items-center p-2">
      <div className="flex flex-col lg:flex-row gap-5 w-full justify-start">
        <TimerUnit unit={{ one: " ano", moreThanOne: " anos"}} />
        <TimerUnit unit={{ one: " mês", moreThanOne: " meses"}} />
        <TimerUnit unit={{ one: " dia", moreThanOne: " dias"}} />
        <TimerUnit unit={{ one: " hora", moreThanOne: " horas"}} />
        <TimerUnit unit={{ one: " minuto", moreThanOne: " minutos"}} />
        <TimerUnit unit={{ one: " segundo", moreThanOne: " segundos"}} />
      </div>
    </section>
  )
  
}
