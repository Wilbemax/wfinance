export interface DefaultButtonProps {
  type: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  size: 'large' | 'middle' | 'small'
  action?: () => void
  children?: React.ReactNode
  disabled?: boolean
  danger?: boolean
  loading?: boolean
}
