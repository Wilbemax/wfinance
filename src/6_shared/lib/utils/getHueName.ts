type ColorShade = 'red' | 'black' | 'white' | 'other'

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

export function determineColorShade(hex: string): ColorShade {
  const { r, g, b } = hexToRgb(hex)

  if (r <= 30 && g <= 30 && b <= 30) {
    return 'black'
  }
  if (r >= 200 && g >= 200 && b >= 200) {
    return 'white'
  }
  if (r > 200 && g < 100 && b < 100) {
    return 'red'
  }
  return 'other'
}
