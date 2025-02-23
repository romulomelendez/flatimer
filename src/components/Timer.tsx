"use client"

import { Suspense, useEffect, useState } from "react"
import { calcDateIntervals } from "../helpers"

import { TimerUnit } from "./TimerUnit"
import moment from "moment"

type LastTitleProps = {
  date: string | Date
  years: number
  months: number
  days: number
}

export const Timer: React.FC = () => {

  const [timerUnitValues, setTimerUnitValues] = useState<LastTitleProps>({} as LastTitleProps)
  const [lastTitleWasToday, setLastTitleWasToday] = useState<boolean>(false)

  const checkIfLastTitleDateWasAtCurrentDate = (lastTitleDateRaw: string): boolean => {

    const dateFormat = "DD-MM-YYYY"

    const today = moment()
    const lastTitleDate = moment(lastTitleDateRaw, dateFormat)

    return lastTitleDate.isSame(today, "day")
  }

  useEffect(() => {

    const handleTimerUnits = async (): Promise<void> => {
      // const soccer_team = process.env.NEXT_PUBLIC_SOCCER_TEAM as string
      // const timerUnitsResponse = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + soccer_team)
      // console.log(timerUnitsResponse.json())
      // const lastTitleObj = calcDateIntervals(timerUnitsResponse.lastTitle.winningDate)
      // setTimerUnitValues(lastTitleObj)

      const testObj = {
        date: "22-02-2025",
        years: 0,
        months: 0,
        days: 0,
      }

      const lastTitleWasAtToday = checkIfLastTitleDateWasAtCurrentDate(testObj.date)
      setLastTitleWasToday(lastTitleWasAtToday)

      setTimerUnitValues(testObj)
    }

    handleTimerUnits()
  }, [])

  return (
    <section className="flex flex-col gap-1 sm:gap-4 justify-center items-center p-2">
      {
        !lastTitleWasToday ? (
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
                  unitTimerValue: timerUnitValues.months,
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
            </Suspense>
          </div>
        ) : "Último título foi hoje!"
      }
      <h4 className="text-slate-200 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {/* { timerUnitValues.name } - { timerUnitValues.dateOfLastTitle } */}
      </h4>
    </section>
  )
}
