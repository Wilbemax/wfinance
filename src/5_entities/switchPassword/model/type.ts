export interface SwitchPasswordInitialState {
  status: number | undefined
  activationLink: string
  steps: {
    step1: boolean
    step2: boolean
    step3: boolean
  }
  isLoading: boolean
}
