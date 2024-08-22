/* eslint-disable indent */

'use client'

import type { ChangeEvent, ClipboardEvent, KeyboardEvent } from 'react'
import { useEffect, useRef, useState } from 'react'

import classes from './WbmOtpInput.module.scss'

interface WbmOtpInputProps {
  length: number
  setValue: (value: string) => void
}

export const WbmOtpInput = ({ length = 6, setValue }: WbmOtpInputProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''))
  const inputRefs = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  useEffect(() => {
    setValue(otp.join(''))
  }, [otp, setValue])

  const handleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target
    if (isNaN(+value)) return
    const newOtp = [...otp]

    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handlePaste = (e: ClipboardEvent): void => {
    const paste = e.clipboardData.getData('text').split('')
    if (paste.length === length) {
      const newOtp = paste.slice(0, length)
      setOtp(newOtp)
    }
  }

  const handleClick = (index: number): void => {
    inputRefs.current[index].setSelectionRange(1, 1)
  }

  const handleKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (
      e.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus()
    }

    // eslint-disable-next-line default-case
    switch (e.key) {
      case 'ArrowRight':
        if (index < length - 1 && inputRefs.current[index + 1]) {
          inputRefs.current[index + 1].select()
        }
        break
      case 'ArrowLeft':
        if (index > 0 && inputRefs.current[index - 1]) {
          inputRefs.current[index - 1].select()
        }
        break
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} onPaste={handlePaste}>
      <div className={classes.filedWrap}>
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(input) => {
              if (input) inputRefs.current[index] = input
            }}
            type='tel'
            inputMode='numeric'
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={classes.filed}
            maxLength={1}
            aria-label={`Введите ${index + 1}-ю цифру OTP`}
          />
        ))}
      </div>
    </form>
  )
}
