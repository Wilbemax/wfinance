'use client'

import React, { useState } from 'react'
import { Button, Modal } from 'antd'

import { availableIcons } from '@/6_shared/lib/utils/iconPack'

import classes from './clasess.module.scss'

type Props = {
  open: boolean
  onClose: () => void
  setIcon: (icon: string) => void
}

const IconPicker = ({ open, onClose, setIcon }: Props) => {
  const [middleIcon, setMiddleIcon] = useState<string>()

  const onOk = () => {
    if (middleIcon) {
      setIcon(middleIcon)
    }
    onClose()
  }
  const handleIconSelect = (icon: string) => {
    setMiddleIcon(icon)
  }

  return (
    <Modal
      zIndex={23232}
      title='Выберете иконку'
      open={open}
      onCancel={onClose} // Убедитесь, что используете onClose для закрытия
      onOk={onOk}
      width={400} // Задайте ширину, если нужно
    >
      <div className={classes.wrapper}>
        {availableIcons.map((icon) => (
          <Button
            className={classes.icon}
            key={icon.name}
            danger={icon.name === middleIcon}
            icon={icon.icon}
            onClick={() => handleIconSelect(icon.name)}
          />
        ))}
      </div>
    </Modal>
  )
}

export { IconPicker }
