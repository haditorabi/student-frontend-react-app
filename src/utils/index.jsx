export const getAverage = (numbers) => {
  const total = numbers.reduce((t, number) => {
      return parseInt(t) + parseInt(number)
  })
  return total / numbers.length
}
