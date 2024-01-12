"use client"

import { Suspense, useEffect, useState } from "react"

import { TimerUnit } from "./TimerUnit"

type LastTitleProps = {
  "id": number,
  "name": string,
  "dateOfLastTitle": number,
  "years": number,
  "mounths": number,
  "days": number,
  "hours": number,
  "minutes": number,
  "seconds": number,
  "clubId": number
}


export const Timer: React.FC = () => {

  const [timerUnitValues, setTimerUnitValues] = useState<LastTitleProps>({} as LastTitleProps)

  useEffect(() => {
    return () => {
      const handleTimerUnits = async (): Promise<void> => {
        
        const soccer_team = process.env.NEXT_PUBLIC_SOCCER_TEAM as string
        const timerUnitsResponse = await (
          await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + soccer_team)
        ).json()
        setTimerUnitValues(timerUnitsResponse.lastTitleDate)
      }
      handleTimerUnits()
    }
  }, [])

  return (
    <section className="flex flex-col gap-1 sm:gap-4 justify-center items-center p-2">
      <div className="grid grid-cols-3 grid-rows-2 gap-9 2xl:flex 2xl:gap-12 w-full">
        <Suspense fallback={<h2>🌀Loading...</h2>}>
          <TimerUnit
            unit={{
              unitTimerValue: timerUnitValues.years,
              one: "ano",
              moreThanOne: "anos",
            }}
          />
          <TimerUnit
            unit={{
              unitTimerValue: timerUnitValues.mounths,
              one: "mês",
              moreThanOne: "meses",
            }}
          />
          <TimerUnit
            unit={{
              unitTimerValue: timerUnitValues.days,
              one: "dia",
              moreThanOne: "dias",
            }}
          />
          <TimerUnit
            unit={{
              unitTimerValue: timerUnitValues.hours,
              one: "hora",
              moreThanOne: "horas",
            }}
          />
          <TimerUnit
            unit={{
              unitTimerValue: timerUnitValues.minutes,
              one: "minuto",
              moreThanOne: "minutos",
            }}
          />
          <TimerUnit
            unit={{
              unitTimerValue: timerUnitValues.seconds,
              one: "segundo",
              moreThanOne: "segundos",
            }}
          />
        </Suspense>
      </div>
      <h4 className="text-slate-200 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl">
        { timerUnitValues.name } - { timerUnitValues.dateOfLastTitle }
      </h4>
    </section>
  )
}
