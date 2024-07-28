import { ArrowLeftOutlined } from '@ant-design/icons'
import Link from 'next/link'
import classes from './BeckButton.module.scss'
import { Typography } from 'antd'

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
      style={{ color: '#000', fontSize: 15, paddingTop: '.3rem' }}
    />
    <Typography.Text style={{ margin: 0 }} className={classes.text}>
      назад
    </Typography.Text>
  </Link>
)
