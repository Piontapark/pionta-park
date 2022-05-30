import { Stats } from '../components/Stats'
import { Content } from '../components/Content'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PiontaCalendar } from '../components/PiontaCalendar'

export default function Index() {
  return (
    <div>
      <Header />
      <Content />
      <PiontaCalendar />
      <Stats />
      <Footer />
    </div>
  )
}
