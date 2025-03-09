"use client"

import { Suspense, useEffect, useState } from "react"

import moment from "moment"

import { TimerUnit } from "./TimerUnit"

type DateRangeProps = {
  diffYears: number,
  diffMonths: number,
  diffDays: number
}

export const Timer: React.FC = () => {

  const [timerUnitValues, setTimerUnitValues] = useState<DateRangeProps>()
  const [lastTitleWasToday, setLastTitleWasToday] = useState<boolean>(false)
  const [currentDate, _] = useState<string>(moment().format("DD/MM/YYYY"))

  useEffect(() => {

    const handleTimerUnits = async (): Promise<void> => {

      // const soccer_team = process.env.NEXT_PUBLIC_SOCCER_TEAM as string
      // const timerUnitsResponse = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + soccer_team)
      // console.log(timerUnitsResponse.json())
      // const lastTitleObj = calcDateIntervals(timerUnitsResponse.lastTitle.winningDate)
      // setTimerUnitValues(lastTitleObj)

      const checkIfLastTitleDateWasAtCurrentDate = (lastTitleDateRaw: string): boolean => {

        // Transforming currentDate in a moment object called 'today'
        const today = moment(currentDate, "DD/MM/YYYY")

        const dateFormat = "DD/MM/YYYY"
    
        const lastTitleDate = moment(lastTitleDateRaw, dateFormat)
    
        return lastTitleDate.isSame(today, "day")
      }
    
      const calcDateRange = (lastTitleDateRaw: string): DateRangeProps => {
        
        // Transforming currentDate in a moment object called 'today'
        const today = moment(currentDate, "DD/MM/YYYY")

        const dateFormat = "DD/MM/YYYY"
        
        const lastTitleDate = moment(lastTitleDateRaw, dateFormat)
    
        const diffYears = Math.abs(lastTitleDate.diff(today, "years"))
        const diffMonths = Math.abs(lastTitleDate.diff(today, "months"))
        const diffDays = Math.abs(lastTitleDate.diff(today, "days"))

        console.log(lastTitleDateRaw)
        console.log("diffYears >>> ", diffYears)

        return {
          diffYears,
          diffMonths,
          diffDays
        }
      }

      const testObj = {
        date: "22-02-2025",
        years: 0,
        months: 0,
        days: 0,
      }

      const dateFormated = moment(testObj.date, "DD-MM-YYYY").format("DD/MM/YYYY")

      if(checkIfLastTitleDateWasAtCurrentDate(dateFormated)) {

        setLastTitleWasToday(true)
        return
      }
      
      const untitledPeriod = calcDateRange(dateFormated)
      setTimerUnitValues(untitledPeriod)

      return
    }

    handleTimerUnits()
  }, [currentDate])

  return (
    <section className="flex flex-col gap-1 p-2">
      <span className="text-slate-200 text-5xl">
        Flamengo está há...
      </span>
      {
        !lastTitleWasToday ? (
          <div className="flex flex-col gap-1">
            <Suspense fallback={<h2>🌀Loading...</h2>}>
              {
                timerUnitValues?.diffYears !== 0 && (
                  <TimerUnit
                    unit={{
                      unitTimerValue: timerUnitValues?.diffYears,
                      one: "ano",
                      moreThanOne: "anos"
                    }}
                  />
                )
              }
              {
                timerUnitValues?.diffMonths !== 0 && (
                  <TimerUnit
                    unit={{
                      unitTimerValue: timerUnitValues?.diffMonths,
                      one: "mês",
                      moreThanOne: "meses"
                    }}
                  />
                )
              }
              {
                timerUnitValues?.diffDays !== 0 && (
                  <TimerUnit
                    unit={{
                      unitTimerValue: timerUnitValues?.diffDays,
                      one: "dia",
                      moreThanOne: "dias"
                    }}
                  />
                )
              }
            </Suspense>
          </div>
        ) : (
          <div className="flex flex-col gap-1 w-full">
            <h3 className="text-3xl text-white text-center">
              🏆🎉 Último título foi hoje! 🏆🎉
            </h3>
            <span className="text-2xl text-white text-center">{ currentDate }</span>
          </div>
        )
      }
      <span className="text-slate-200 text-5xl">
        sem título
      </span>
    </section>
  )
}
