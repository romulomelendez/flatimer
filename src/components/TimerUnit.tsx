type UnitProps = {
    unit: {
        unitTimerValue: number | undefined,
        one: string,
        moreThanOne: string
    }
}

export const TimerUnit = ({ unit: { unitTimerValue, one, moreThanOne } }: UnitProps) => {
  
  return (
    <>
      {
        unitTimerValue && (
          <div className="flex flex-col text-white font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <h1>
              { unitTimerValue }
            </h1>
            <h1>
              { unitTimerValue != 1 ? " " + moreThanOne : " " + one }
            </h1>
          </div>
        )
      }
    </>
  )
}