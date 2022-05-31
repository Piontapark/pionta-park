import './iframe-container.css'

export const GoogleCalendar = ({ title }) => {
  const baseUrl = 'https://calendar.google.com/calendar/embed'

  const options = [
    'bgcolor=%23ffffff',
    'ctz=Europe%2FRome',
    'mode=MONTH',
    // 'mode=AGENDA',
    'showCalendars=0',
    // we omit the date since it takes up too much space on mobile
    'showDate=0',
    // we omit the print button since no one would tap on it when visiting the website on mobile
    'showPrint=0',
    'showTabs=1',
    // we omit the title since it takes up too much space on mobile
    'showTitle=0',
    'showTz=1',
    // first all `src`, then all `color`
    'src=MHUxMzliZ3A2c2k4dmFhZTJmMXE5cDZ2NmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
    'src=OGYxaXJsZmdxN3BhMWp2cnI2MzEycHFtMDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
    'src=OWVqNzRlMnNzZWkwaDlqc3RhMXRxdWoxM2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
    'src=aHRpbWJuZWFsbWI1YTRyOHMxcjkxdmN0ZXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
    'color=%23D81B60',
    'color=%23E4C441',
    'color=%237CB342',
    'color=%23039BE5',
    // start week on monday
    'wkst=2'
  ]
  const queryString = options.join('&')

  return (
    <div className="iframe__container">
      <iframe
        src={`${baseUrl}?${queryString}`}
        scrolling="no"
        title={title}
      ></iframe>
    </div>
  )
}
