'use client'

import React, { useEffect, useState } from 'react'

import { WbmOtpInput } from '@/6_shared/ui/WbmOTPinput/WbmOtpInput'

import { SwitchButton } from '../../SwitchButton'

import classes from './ForgotSeconForm.module.scss'

const SecondStepForm = () => {
  const [code, setCode] = useState<string>('')
  const [submittable, setSubmittable] = useState<boolean>(false)

  useEffect(() => {
    if (code.length === 6) setSubmittable(true)
  }, [code])

  return (
    <div className={classes.wrapper}>
      <WbmOtpInput length={6} setValue={setCode} />
      <SwitchButton code={code} submittabl={submittable} />
    </div>
  )
}

export { SecondStepForm }
