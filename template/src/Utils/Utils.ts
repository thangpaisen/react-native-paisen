import { Dimensions } from 'react-native'

export const APP_PADDING = 16

export const screenWidth = Dimensions.get('screen').width
export const screenHeight = Dimensions.get('screen').height

export const timeDifference = (date?: string) => {
  const now = new Date()
  const difference = now.getTime() - new Date(date || new Date()).getTime()

  const minutes = Math.floor(difference / (1000 * 60))
  const hours = Math.floor(difference / (1000 * 60 * 60))
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))

  if (minutes < 60) {
    return `${minutes} phút trước`
  } else if (hours < 24) {
    return `${hours} giờ trước`
  } else {
    return `${days} ngày trước`
  }
}

export const formatViews = (number: number) => {
  if (number < 1000) {
    return number.toString()
  } else if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + 'K'
  } else if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(1) + 'M'
  } else if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + 'B'
  }
}

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
