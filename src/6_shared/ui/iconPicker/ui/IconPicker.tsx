'use client'

import React, { useState } from 'react'
import { Button, Drawer, Input, Modal } from 'antd'

import { availableIcons } from '@/6_shared/lib/utils/iconPack'

type Props = {
  open: boolean
  onClose: () => void
  setIcon: (icon: React.JSX.Element) => void
}

const IconPicker = ({ open, onClose, setIcon }: Props) => {
  const handleIconSelect = (icon: React.JSX.Element) => {
    setIcon(icon)
    onClose()
  }

  return (
    <Modal
      zIndex={23232}
      title='Select an Icon'
      open={open}
      onClose={onClose} // Убедитесь, что используете onClose для закрытия
      width={400} // Задайте ширину, если нужно
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
        }}
      >
        {availableIcons.map((icon, index) => (
          <Button
            key={index}
            icon={icon.icon}
            onClick={() => handleIconSelect(icon.icon)}
          >
            {icon.name}
          </Button>
        ))}
      </div>
    </Modal>
  )
}

export { IconPicker }
