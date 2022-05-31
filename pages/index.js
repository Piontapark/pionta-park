import { Header } from '../components/Header'
import { Contacts } from '../components/Contacts'
import { Bike } from '../components/icons/Bike'
import { CurlyArrow } from '../components/icons/CurlyArrow'
import { CatStereo } from '../components/icons/CatStereo'
import { ComputerUser } from '../components/icons/ComputerUser'
import { Family } from '../components/icons/Family'
import { Card } from '../components/Card'
import { Carousel } from '../components/Carousel'
import { GoogleCalendar } from '../components/GoogleCalendar'
import { Socials } from '../components/Socials'
import { Footer } from '../components/Footer'
import pionta from '/public/pionta.json'

export default function Index() {
  const sections = [
    'Eventi',
    ...pionta.cards.map((card) => card.title),
    'Contatti'
  ]

  const cards = pionta.cards.map((card) => {
    switch (card.title) {
      case 'Cultura': {
        return { ...card, icon: <ComputerUser /> }
      }
      case 'Educazione': {
        return { ...card, icon: <Family /> }
      }
      case 'Natura': {
        return { ...card, icon: <Bike /> }
      }
      case 'Storia': {
        return { ...card, icon: <CurlyArrow /> }
      }
      default: {
        return { ...card, icon: undefined }
      }
    }
  })

  return (
    <div id="root" className="flow">
      <Header sections={sections} />
      <main className="wrapper">
        <div className="flow">
          <article className="flow" id={'Eventi'}>
            <h2 style={{ color: 'var(--color-pionta-green)' }}>
              <span>Eventi </span>
              <CatStereo />
            </h2>
            <GoogleCalendar title={'Google Calendar eventi Pionta'} />
          </article>
          <Socials
            facebook={pionta.links.facebook}
            instagram={pionta.links.instagram}
            spotify_piontacast_2051={pionta.links.spotify_piontacast_2051}
            spotify_tetti_rossi={pionta.links.spotify_tetti_rossi}
            youtube={pionta.links.youtube}
          />
          {cards.map((card) => {
            return (
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
              >
                <Carousel images={card.images} />
              </Card>
            )
          })}
          {/* <Stats /> */}
          <Contacts email={'piontapark@gmail.com'} />
        </div>
      </main>
      <Footer
        facebook={pionta.links.facebook}
        instagram={pionta.links.instagram}
        spotify_piontacast_2051={pionta.links.spotify_piontacast_2051}
        spotify_tetti_rossi={pionta.links.spotify_tetti_rossi}
        youtube={pionta.links.youtube}
      />
    </div>
  )
}
