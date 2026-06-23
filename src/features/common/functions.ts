export const formatString = (value: string) => {
  return value.replace(/-/g, " ")
}

export const capitalizeFirstLetter = (input: string | string[]) => {
  if (typeof input === "string") {
    const strings = [input]
    return strings.map(temp => {
      const cleanedString = temp
      return cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1).toLowerCase()
    })
  } else if (Array.isArray(input)) {
    return input.map(temp => {
      const cleanedString = temp
      return cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1).toLowerCase()
    })
  } else {
    return []
  }
}
