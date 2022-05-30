import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const onClickDay = (value, event) => {
  console.log('🚀 ~ onClickDay ~ value', value)
  console.log(`you clicked/tapped on day ${event.target.innerText}`)
  alert(`you clicked/tapped on day ${event.target.innerText}`)
}

const tileClassName = (props) => {
  const { date, view } = props

  const splits = date.toISOString().split('-')
  const [year, month, s] = splits
  const [day] = s.split('T')

  if (day === '11') {
    return 'bg-green-100'
  } else if (day === '13') {
    return 'red'
  } else if (day === '25') {
    return 'purple'
  } else {
    return ''
  }
}

export const PiontaCalendar = () => {
  return (
    <div className="container mx-auto px-4">
      <Calendar
        className="mx-auto max-w-md"
        defaultView="month"
        locale="it-IT"
        onClickDay={onClickDay}
        tileClassName={tileClassName}
      />
    </div>
  )
}
