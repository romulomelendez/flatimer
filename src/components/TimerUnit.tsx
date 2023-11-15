type UnitProps = {
    unit: {
        one: string,
        moreThanOne: string
    }
}

export const TimerUnit = ({ unit: { one, moreThanOne } }: UnitProps) => {
  return (
    <h1 className="text-white font-semibold text-6xl">
        {/* { testDate.years }
        { +testDate.years != 1 ? moreThanOne : one } */}
    </h1>
  )
}