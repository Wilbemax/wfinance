import { FirstStepForm } from '@/4_feature/switchPassword/FristStepForm'
import { SecondStepForm } from '@/4_feature/switchPassword/SecondStep'
import { ThirdStepForm } from '@/4_feature/switchPassword/ThirdStep'

export interface Step {
  title: string
  subText: string
  FormComponent: React.FC<any> // Уточните пропсы, если они есть
  faqText: string
  beckButtonEndpoint: string
}
export const steps: Step[] = [
  {
    title: 'Восстановление пароля',
    subText:
      'Чтобы мы могли восстановить ваш доступ к аккаунту, введите почту, на которую он зарегистрирован. Если всё введено верно, на вашу почту придёт код подтверждения операции.',
    FormComponent: FirstStepForm,
    faqText:
      'Если вы уверены в том, что ввели все правильно, то убедитесь, что ваш аккаунт активирован. Это можно проверить на почте.',
    beckButtonEndpoint: '/auth/login',
  },
  {
    title: 'Введите код подтверждения',
    subText: 'Введите код, который был отправлен на вашу почту.',
    FormComponent: SecondStepForm,
    faqText:
      'Если код не совпадает или пришел пятизначный код - попробуйте еще раз пройти все с начала.',
    beckButtonEndpoint: '/auth/forgot',
  },
  {
    title: 'Создание нового пароля',
    subText: 'Придумайте новый пароль для вашего аккаунта.',
    FormComponent: ThirdStepForm,
    faqText: 'Если не удается сменить пароль, попробуйте позже.',
    beckButtonEndpoint: '/auth/forgot',
  },
  {
    title: 'Успешно', 
    subText: 'Ваш пароль был успешно изменен.',
    FormComponent: ThirdStepForm,
    faqText: '',
    beckButtonEndpoint: '/auth/login',
  },
]
