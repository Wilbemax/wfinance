export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

export function getDaysPassedInMonth(date: Date = new Date()): number {
  const day = date.getDate()
  return day
}

export function getDaysLeftInMonth(date: Date = new Date()): number {
  const year = date.getFullYear()
  const month = date.getMonth()
  const totalDaysInMonth = getDaysInMonth(year, month)
  const daysPassed = getDaysPassedInMonth(date)
  return totalDaysInMonth - daysPassed
}

export function getDays() {
  const today = new Date()
  return {
    daysPassed: getDaysPassedInMonth(today),
    daysLeft: getDaysLeftInMonth(today),
  }
}
