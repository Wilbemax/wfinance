'use client'
import { QuestionCircleOutlined } from '@ant-design/icons/lib/icons'
import { Tooltip } from 'antd'
import React from 'react'

interface WbmFAQProps {
  helpText: string
}
export const WbmFAQ = ({ helpText }: WbmFAQProps) => (
  <Tooltip title={helpText} placement='bottomLeft'>
    <QuestionCircleOutlined style={{ padding: '0.2rem' }} />
  </Tooltip>
)
