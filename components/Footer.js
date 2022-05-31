import './footer.css'
import { Logo } from './Logo'
import { Facebook } from './icons/Facebook'
import { Instagram } from './icons/Instagram'
import { Spotify } from './icons/Spotify'
import { Youtube } from './icons/Youtube'

export const Footer = ({
  facebook,
  instagram,
  youtube,
  spotify_piontacast_2051,
  spotify_tetti_rossi
}) => {
  return (
    <section className="footer box">
      <ul className="cluster wrapper justify-content:space-between">
        <li>
          <Logo />
        </li>
        <li>
          <ul className="cluster" data-align="start">
            <li>
              <Facebook href={facebook} />
            </li>
            <li>
              <Instagram href={instagram} />
            </li>
            <li>
              <Youtube href={youtube} />
            </li>
            <li>
              <Spotify href={spotify_piontacast_2051} />
            </li>
            <li>
              <Spotify href={spotify_tetti_rossi} />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
