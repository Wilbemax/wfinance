'use client'

import { useState } from 'react'
import { Button, Typography } from 'antd'

import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

const AddNewPage = () => {
  const [isWaste, setIsWaste] = useState<boolean | null>(null)

  if (isWaste === null) {
    return (
      <Container>
        <div className={classes.variantsButtonWrapper}>
          <Typography.Title
            level={4}
            style={{ textAlign: 'center', marginTop: '1rem' }}
          >
            Что запишем ?
          </Typography.Title>
          <div className={classes.buttons}>
            <Button>Поступление</Button>
            <Button>Трата</Button>
          </div>
        </div>
      </Container>
    )
  }
  return <div>AddNewPage</div>
}

export { AddNewPage }
