export interface SwitchPasswordInitialState {
  status: number | undefined | null
  activationLink: string
  steps: {
    step1: boolean
    step2: boolean
    step3: boolean
  }
  isLoading: boolean
}
