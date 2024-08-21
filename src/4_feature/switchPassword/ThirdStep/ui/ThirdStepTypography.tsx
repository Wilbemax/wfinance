'use client'

import Typography from 'antd/es/typography'

export const ThirdStepTypography = () => (
  <>
    <Typography.Title level={3} style={{ margin: 0 }}>
      Введите новый пароль
    </Typography.Title>
    <Typography.Paragraph style={{ margin: 0, color: '#696969' }}>
      Пожалуйста, обратите внимание на правила создания нового пароля. Они будут
      отображаться под полем ввода.{' '}
    </Typography.Paragraph>
  </>
)
