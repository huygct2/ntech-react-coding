import moment from 'moment'

const DAYS = 'd'
const HOURS = 'h'
const MINUTES = 'm'
const SECONDS = 's'

export default class RelativeTime {

  static toParts(raceTime, timeNow, minutesToCountdown) {
    if (!timeNow) {
      timeNow = moment().valueOf()
    }
    return this.secondsToParts(this.secondsBetween(raceTime, timeNow), minutesToCountdown)
  }

  static secondsBetween(raceTime, timeNow) {
    let time = moment(raceTime).valueOf()
    let now = moment(timeNow).valueOf()
    let diffInSeconds = Math.floor((time - now) / 1000)
    return diffInSeconds
  }

  static minutesBetween(raceTime, timeNow) {
    const end = moment(raceTime)
    const start = moment(timeNow)
    return moment.duration(end.diff(start)).asMinutes()
  }

  static secondsToParts(diffInSeconds, minutesToCountdown) {
    let absDiff = Math.abs(diffInSeconds)
    let days = Math.floor(absDiff / 86400)
    let hours = Math.floor((absDiff - (days * 86400)) / 3600)
    let minutes = Math.floor((absDiff - (days * 86400) - (hours * 3600)) / 60)
    let seconds = absDiff - (days * 86400) - (hours * 3600) - (minutes * 60)
    let parts = []

    if (days > 0) {
      parts.push({ amount: days, unit: DAYS })
    }
    if (hours > 0) {
      parts.push({ amount: hours, unit: HOURS })
    }
    if (days === 0 && hours === 0 && minutes > 0) {
      parts.push({ amount: minutes, unit: MINUTES })
      if (diffInSeconds > 0 && minutesToCountdown && minutes < minutesToCountdown) {
        parts.push({ amount: seconds, unit: SECONDS })
      }
    }
    if (absDiff < 60) {
      parts.push({ amount: seconds, unit: SECONDS })
    }
    if (diffInSeconds < 0) {
      parts[0].amount = -parts[0].amount
    }

    return parts
  }
}
