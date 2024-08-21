import { ArrowLeftOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import Link from 'next/link'

import classes from './BeckButton.module.scss'

interface BeckButtonProps {
  endpoint: string
  action?: () => void
}

export const BeckButton = ({
  endpoint,
  action = () => {},
}: BeckButtonProps) => (
  <Link href={endpoint} className={classes.button} onClick={action}>
    {' '}
    <ArrowLeftOutlined
      style={{ color: '#747d8a', fontSize: 15, paddingTop: '.3rem' }}
    />
    <Typography.Text
      style={{ margin: 0, fontSize: 18 }}
      className={classes.text}
    >
      назад
    </Typography.Text>
  </Link>
)
