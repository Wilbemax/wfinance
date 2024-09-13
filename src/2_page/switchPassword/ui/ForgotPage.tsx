'use client'

import React from 'react'

import { SuccessSwitch } from '@/2_page/servisePage/SuccessSwitch'
import { steps as step } from '@/3_widgets/switchPassword/lib/steps'
import { ForgotStep } from '@/3_widgets/switchPassword/ui/SwitchSteps'
import { useSwitchPassword } from '@/5_entities/switchPassword/lib/useSwitchPassword'
import { Container } from '@/6_shared/ui/continer'

const ForgotPage: React.FC = () => {
  // Извлекаем состояние из Redux
  const { steps } = useSwitchPassword()

  // Определяем текущий индекс шага на основе состояния
  let currentStepIndex = 0
  if (steps.step1 && !steps.step2) {
    currentStepIndex = 1
  } else if (steps.step1 && steps.step2 && !steps.step3) {
    currentStepIndex = 2
  } else if (steps.step1 && steps.step2 && steps.step3) {
    currentStepIndex = 3
  }

  if (currentStepIndex === 3) {
    return <SuccessSwitch />
  }

  // Выбираем текущий шаг
  const currentStep = step[currentStepIndex]

  return (
    <Container>
      <ForgotStep {...currentStep} beckButtonEndpoint='/auth/login' />
    </Container>
  )
}

export { ForgotPage }
