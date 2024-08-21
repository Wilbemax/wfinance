'use client'

import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons/lib/icons'
import { Tooltip } from 'antd'

interface WbmFAQProps {
  helpText: string
}
export const WbmFAQ = ({ helpText }: WbmFAQProps) => (
  <Tooltip title={helpText} placement='bottomLeft'>
    <QuestionCircleOutlined style={{ color: '#747d8a', padding: '0.2rem' }} />
  </Tooltip>
)
