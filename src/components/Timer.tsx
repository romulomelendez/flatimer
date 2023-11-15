"use client"

import { useEffect, useState } from "react"

import { TimerUnit } from "./TimerUnit"

type LastTitleProps = {
  dateOfLastTitle?: string,
  years: string | number,
  mounths: string | number,
  days: string | number,
  hours: string | number,
  minutes: string | number,
  seconds: string | number 
}

export const Timer: React.FC = () => {

  const [timerUnitValues, setTimerUnitValues] = useState<LastTitleProps>({} as LastTitleProps)

  useEffect(() => {
    return () => {
      const handleTimerUnits = async (): Promise<void> => {
        const timerUnitsResponse = await (await fetch("http://localhost:3000/lastTitle")).json()
        setTimerUnitValues(timerUnitsResponse[0])
      }
      handleTimerUnits()
    }
  }, [])
  
  return (
    <section className="flex flex-col gap-1 justify-center items-center p-2">
      <div className="flex flex-col lg:flex-row gap-5 w-full justify-start">
        <TimerUnit unit={{ unitTimerValue: timerUnitValues.years, one: "ano", moreThanOne: "anos"}} />
        <TimerUnit unit={{ unitTimerValue: timerUnitValues.mounths, one: "mês", moreThanOne: "meses"}} />
        <TimerUnit unit={{ unitTimerValue: timerUnitValues.days, one: "dia", moreThanOne: "dias"}} />
        <TimerUnit unit={{ unitTimerValue: timerUnitValues.hours, one: "hora", moreThanOne: "horas"}} />
        <TimerUnit unit={{ unitTimerValue: timerUnitValues.minutes, one: "minuto", moreThanOne: "minutos"}} />
        <TimerUnit unit={{ unitTimerValue: timerUnitValues.seconds, one: "segundo", moreThanOne: "segundos"}} />
      </div>
    </section>
  )
  
}
