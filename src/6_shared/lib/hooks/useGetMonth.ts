export const getMonthName = (monthNumber: number): string => {
  const monthNames: string[] = [
    'Январе',
    'Феврале',
    'Марте',
    'Апреле',
    'Мае',
    'Июне',
    'Июле',
    'Августе',
    'Сентябре',
    'Октябре',
    'Ноябре',
    'Декабре',
  ]

  return monthNames[monthNumber - 1]
}
