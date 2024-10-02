export const getRoundedPercent = (a: number, b: number): number => {
  if (Math.round((a / b) * 100) >= 100) {
    return 100
  }
  return Math.round((a / b) * 100)
}
