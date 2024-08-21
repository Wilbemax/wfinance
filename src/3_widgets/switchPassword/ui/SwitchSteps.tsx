'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from 'antd'

import { clearSteps } from '@/5_entities/switchPassword/model/slice'
import { BeckButton } from '@/6_shared/ui/beckButton/BeckButton'
import { WbmFAQ } from '@/6_shared/ui/FAQ/WbmFAQ'

import classes from './classes.module.scss'

interface ForgotStepProps {
  title: string
  subText: string
  FormComponent: React.FC<any>
  faqText: string
  beckButtonEndpoint: string
}

const ForgotStep: React.FC<ForgotStepProps> = ({
  title,
  subText,
  FormComponent,
  faqText,
  beckButtonEndpoint,
}) => {
  const dispatch = useDispatch()
  const clear = () => dispatch(clearSteps())

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <BeckButton endpoint={beckButtonEndpoint} action={clear} />
        <WbmFAQ helpText={faqText} />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.typography}>
          <Typography.Title level={3}>{title}</Typography.Title>
          <Typography className={classes.subText}>{subText}</Typography>
        </div>
        <FormComponent />
      </div>
    </div>
  )
}

export { ForgotStep }
