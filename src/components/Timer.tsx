"use client"

import { useState, useEffect } from "react"

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

type TestDateProps = {
  years: string | number,
  mounths: string | number,
  days: string | number,
}

export const Timer: React.FC<LastTitleProps> = ({ lastTitle: { timeOfLastTitle: { hour, minutes, seconds } } }: LastTitleProps ) => {

  const [testDate, setTestDate] = useState({} as TestDateProps)

  useEffect(() => {
    return () => {
      handleDate()
    }
  },)
  
  const handleDate = () => {
    setTestDate({
      years: 1,
      mounths: 0,
      days: 8
    })
  }

  return (
    <section className="flex flex-col gap-1 justify-center items-center p-2">
      <div className="flex flex-col lg:flex-row gap-5 w-full justify-start">
        <h1 className="text-white font-semibold text-6xl">
          { testDate.years }
          { +testDate.years >= 2 ? " anos" : " ano" }
        </h1>
        <h1 className="text-white font-semibold text-6xl">
          { testDate.mounths }
          { +testDate.mounths != 1 ? " meses" : " mês" }
        </h1>
        <h1 className="text-white font-semibold text-6xl">
          { testDate.days }
          { +testDate.days != 1 ? " dias" : " dia" }
        </h1>
        <h1 className="text-white font-semibold text-6xl">
          { hour }
          { +hour != 1 ? " horas" : " hora" }
        </h1>
        <h1 className="text-white font-semibold text-6xl">
          { minutes }
          { +hour != 1 ? " minutos" : " minuto" }
        </h1>
        <h1 className="text-white font-semibold text-6xl">
          { seconds }
          { +hour != 1 ? " segundos" : " segundo" }
        </h1>
      </div>
    </section>
  )
  
}
