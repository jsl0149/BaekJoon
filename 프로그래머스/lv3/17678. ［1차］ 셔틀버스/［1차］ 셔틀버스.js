function solution (n, t, m, timetable) {
  const buses = findBuses(n, t)
  const timeTable = timetable.map(parseTime)

  timeTable.sort(compareTime)

  for (let j = 0; j < buses.length; j++) {
    const bus = buses[j]
    bus.crews = []

    let goNext = false

    while (timeTable.length) {
      if (bus.crews.length >= m) break
      if (goNext) break

      const crew = timeTable.shift()

      if (isEarlierThan(crew, bus)) {
        bus.crews.push(crew)
      } else {
        timeTable.unshift(crew)
        break
      }
    }
  }

  let time = null

  for (let i = buses.length - 1; i >= 0; i--) {
    const bus = buses[i]

    if (bus.crews.length < m) {
      time = bus
      break
    }

    const nextBus = buses[i + 1]
    const lastCrew = bus.crews[bus.crews.length - 1]

    if (nextBus) {
      if (isEarlierThan(lastCrew, nextBus.crews[0])) {
        time = lastCrew
        break
      }
    } else {
      time = {
        ...lastCrew,
      }
      if (lastCrew.minute === 0) {
        time.hour = lastCrew.hour - 1
        time.minute = 59
      } else {
        time.minute = lastCrew.minute - 1
      }
      break
    }
  }

  const hour = time.hour < 10 ? `0${time.hour}` : `${time.hour}`
  const minute = time.minute < 10 ? `0${time.minute}` : `${time.minute}`

  console.log(hour + ':' + minute)

  return hour + ':' + minute
}

function isEarlierThan (a, b) {
  if (compareTime(a, b) > 0) return false
  return true
}

function compareTime (a, b) {
  if (a.hour > b.hour) return 1
  if (a.hour < b.hour) return -1
  else if (a.minute > b.minute) return 1
  return -1
}

function findBuses (n, t) {
  const buses = []

  for (let i = 0; i < n; i++) {
    let minutes = i * t
    const hours = Math.floor(minutes / 60)
    const bus = {
      hour: 9 + hours,
      minute: minutes % 60
    }

    buses.push(bus)
  }

  return buses
}

function parseTime (s) {
  const [ _hour, _minute ] = s.split(':')

  return {
    hour: Number(_hour),
    minute: Number(_minute)
  }
}