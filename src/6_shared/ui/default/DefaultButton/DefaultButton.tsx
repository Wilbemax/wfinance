//deprecated -------------------------------------------------------------------------------------- !>

import { Button } from 'antd'
import { DefaultButtonProps } from './DefaultButton.type'

export default function DefaultButton({
  type,
  size,
  children,
  action,
  disabled,
  danger,
  loading,
}: DefaultButtonProps) {
  return (
    <Button
      type={type}
      onClick={action}
      size={size}
      style={{ width: '100%' }}
      disabled={disabled}
      danger={danger}
      loading={loading}
      htmlType='submit'
    >
      {children && children}
    </Button>
  )
}
