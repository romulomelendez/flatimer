type UnitProps = {
    unit: {
        unitTimerValue: string | number,
        one: string,
        moreThanOne: string
    }
}

export const TimerUnit = ({ unit: { unitTimerValue, one, moreThanOne } }: UnitProps) => {

  return (
    <h1 className="text-white font-semibold text-6xl">
        { unitTimerValue }
        { unitTimerValue != 1 ? " " + moreThanOne : " " + one }
    </h1>
  )
}