'use client'

import { useState } from 'react'
import { Button, Drawer, Input, Segmented, Typography } from 'antd'
import Lottie from 'lottie-react'
import { ChevronLeft, ScanLine } from 'lucide-react'

import type { ThemeType } from '@/5_entities/theme/model/type'
import { useAppSelector } from '@/6_shared/model/hooks'
import dog from '@/6_shared/public/2_pup_suspicious.json'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

const AddNewPage = () => {
  const [isWaste, setIsWaste] = useState<boolean>(false)
  const [isIncome, setIsIncome] = useState<boolean>(true)

  //
  const [value, setValue] = useState<string | number>('Сегодня')
  //

  const currentTheme = useAppSelector(
    (state) => state.theme.currentTheme
  ) as ThemeType
  return (
    <>
      <Container>
        <div className={classes.variantsButtonWrapper}>
          <Typography.Title
            level={4}
            style={{ textAlign: 'center', marginTop: '1rem' }}
          >
            Что запишем ?
          </Typography.Title>
          <div className={classes.animated}>
            <Lottie animationData={dog} loop autoPlay style={{ width: 200 }} />
          </div>
          <div className={classes.buttons}>
            <Button
              onClick={() => setIsIncome(true)}
              type='primary'
              size='large'
              style={{ fontWeight: 400, width: '100%' }}
            >
              Поступление
            </Button>
            <Button
              onClick={() => setIsWaste(true)}
              size='large'
              style={{
                background: '#cccccc',
                color: '#23272e',
                width: '100%',
                fontWeight: 400,
              }}
            >
              Трата
            </Button>
          </div>
        </div>
      </Container>

      {/* TODO убрать это от сюда, сделать это более юзабильнм и оптимизированным  */}
      <Drawer
        open={isIncome}
        closable={false}
        style={{
          background: `${currentTheme === 'dark' ? '#0b1524' : '#f1faee'}`,
          padding: 0,
        }}
      >
        <Container>
          <div className={classes.drawerHeader}>
            <div className={classes.drawerIcon}>
              <ChevronLeft />
            </div>
            <Typography.Title
              level={5}
              style={{
                textAlign: 'center',
                margin: 0,
                padding: 0,
                lineHeight: 1,
              }}
            >
              Новое поступление
            </Typography.Title>
            <div className={classes.drawerIcon}>
              <ScanLine />
            </div>
          </div>
          <div style={{ width: '100%', paddingTop: '1rem' }}>
            <Segmented
              // style={{background: '#fff'}}
              options={['Вчера', 'Сегодня', 'Другое']}
              value={value}
              onChange={setValue}
              block
              size='middle'
            />
          </div>

          {/* TODO поправить инпут, по хорошему полностью переделать, не понимаю почему он растягивается на 600 пикселей */}
          <div className={classes.drawerNumber}>
            <input
              className={classes.input}
              type='number'
              style={{
                color: currentTheme === 'dark' ? '#f1faee' : '#0b1524',
                textAlign: 'center',
                minWidth: '100px', // Минимальная ширина, чтобы было пространство
              }}
              defaultValue={1500}
            />
            <Typography.Text style={{ color: '#29abe2', marginLeft: 8 }}>
              ₽
            </Typography.Text>
          </div>
        </Container>
      </Drawer>
      <Drawer
        style={{
          background: `${currentTheme === 'dark' ? '#0b1524' : '#f1faee'}`,
          padding: 0,
        }}
        closable={false}
        open={isWaste}
      >
        Новая трата
      </Drawer>
    </>
  )
}

export { AddNewPage }
