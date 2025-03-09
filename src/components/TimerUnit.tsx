type UnitProps = {
    unit: {
        unitTimerValue: number | undefined,
        one: string,
        moreThanOne: string
    }
}

export const TimerUnit = ({ unit: { unitTimerValue, one, moreThanOne } }: UnitProps) => {
  
  return (
    <div className="flex gap-2">
      {
        unitTimerValue !== 0 &&
          <span className="text-red-600 text-9xl">{ unitTimerValue }</span>
      }
      {
        unitTimerValue !== 1 ?
          <span className="text-red-600 text-9xl">{ " " + moreThanOne }</span>
        : <span className="text-red-600 text-9xl">{ "" + one }</span>
      }
    </div>
  )
}