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
        unitTimerValue !== 0 && (
          <div className="flex gap-2">
            <span className="text-red-600 text-9xl">
              { unitTimerValue }
            </span>
            <span className="text-red-600 text-9xl">
              {
                unitTimerValue === 1 ? one : moreThanOne
              }
            </span>
          </div>
        )
      }
    </>
  )
}