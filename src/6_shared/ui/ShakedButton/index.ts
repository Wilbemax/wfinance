export const addShakeOnButton = (element: HTMLElement | null) => {
  element?.classList.add('Shaken')

  setTimeout(() => {
    element?.classList.remove('Shaken')
  }, 1000)
}
