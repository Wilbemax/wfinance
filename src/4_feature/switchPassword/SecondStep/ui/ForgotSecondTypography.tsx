'use client'
import { Typography } from 'antd'
import React from 'react'

export const ForgotSecondTypography = () => (
  <div>
    <Typography.Title level={3} style={{ margin: 0 }}>
      Введите код
    </Typography.Title>
    <Typography.Paragraph style={{ margin: 0, color: '#696969' }}>
      На ваш почтовый ящик пришёл шестизначный код. Подтвердите его в
      соответствующем поле ниже.
    </Typography.Paragraph>
  </div>
)
