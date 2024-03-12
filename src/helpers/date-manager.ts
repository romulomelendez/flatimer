type DateIntervalProps = {
    date: string | Date,
    years: number,
    months: number,
    days: number,
}

export const calcDateIntervals = (date: string): DateIntervalProps => {
  const currentDate = new Date()
  const initialDate = new Date(date)

  // Calculates the difference in milliseconds between the two dates
  const dateRangeInMili = calcDateRangeInMili(initialDate, currentDate)

  // Converts the difference in milliseconds to years, months and days
  const oneYearInMili = calcOneYearInMili()
  const oneMonthInMili = calcOneMonthInMili(oneYearInMili)

  const years = Math.floor(dateRangeInMili / oneYearInMili)
  const months = Math.floor((dateRangeInMili % oneYearInMili) / oneMonthInMili)
  const days = Math.floor((dateRangeInMili % oneYearInMili) / (1000 * 60 * 60 * 24))

  return {
    date,
    years,
    months,
    days,
  }
}

const calcDateRangeInMili = (startDate: Date, now: Date): number => (+now - +startDate)
const calcOneYearInMili = (): number => 1000 * 60 * 60 * 24 * 365.25
const calcOneMonthInMili = (oneYearInMili: number): number => oneYearInMili / 12
