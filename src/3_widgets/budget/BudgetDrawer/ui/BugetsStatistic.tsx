import dynamic from 'next/dynamic'

import type {
  BudgetItem,
  PereMonth,
  UserBudgets,
} from '@/5_entities/user/model/type'
import { getRoundedPercent } from '@/6_shared/lib/utils/getRoundedPercent'

import classes from './classes.module.scss'

const RadialBar = dynamic(
  () => import('@ant-design/plots').then(({ RadialBar }) => RadialBar),
  { ssr: false }
)

// const data = [
//   { name: 'фыва', lala: 297, color: '#1b263b' },
//   { name: 'G', lala: 506, color: '#da70b7' },
//   { name: 'AVA', lala: 805, color: '#3a7d1e' },
//   { name: 'G2Plot', lala: 1478, color: '#ffbb33' },
// ]
interface Props {
  budget: UserBudgets
}
const BudgetStatistic = ({ budget }: Props) => {
  const data = budget.budgets.map((budget) => {
    const perMonth = budget.pereMonth.find(
      (item) =>
        item.month === new Date().getMonth() + 1 &&
        item.year === new Date().getFullYear()
    )

    if (perMonth) {
      return {
        name: budget.name,
        percent: getRoundedPercent(perMonth.totalAmount, perMonth.maxExpense),
        color: budget.color,
      }
    }
  })

  console.log('data: ', data)

  const config = {
    data,
    xField: 'name',
    yField: 'percent',
    maxAngle: 350,
    radius: 1.3,
    innerRadius: 0.2,
    // tooltip: {
    //   items: ['percent'],
    // },
    legend: false,
    axis: {
      y: false,
      x: false,
    },
    markBackground: {
      opacity: 0.25,
    },
    scale: {
      y: {
        domain: [0, 100], // 设定范围用于背景图的渲染获取最大值
      },
    },
    style: {
      radius: 50,
      fill: ({ color, percent }: { color: string; percent: number }) => {
        if (percent === 100) {
          return '#e63946'
        }
        return color
      },
    },
    label: false,
  }
  return (
    <div style={{ width: 123, height: 123 }}>
      <RadialBar {...config} />
    </div>
  )
}

export { BudgetStatistic }
