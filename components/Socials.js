import { Facebook } from './icons/Facebook'
import { Instagram } from './icons/Instagram'
import { Spotify } from './icons/Spotify'
import { Youtube } from './icons/Youtube'

export const Socials = ({
  facebook,
  instagram,
  spotify_piontacast_2051,
  spotify_tetti_rossi,
  youtube
}) => {
  return (
    <article className="flow" style={{}}>
      <h2>Socials</h2>
      <ul className="list-disc wrapper">
        <li>
          <span>Iscriviti al </span>
          <a href={facebook} className="underline">
            {`gruppo Facebook `}
          </a>
          <Facebook href={facebook} className={'inline'} />
          <span> e sarai sempre aggiornato su cosa succede al Pionta.</span>
        </li>
        <li>
          <span>Collegati alla </span>
          <a href={instagram} className="underline">
            {`pagina Instagram piontapark `}
          </a>
          <Instagram href={instagram} className="icon" />
          <span> e collabora all'archivio fotografico del parco.</span>
        </li>
        <li>
          <span>Guarda i video del </span>
          <a href={youtube} className="underline">
            {`canale YouTube piontapark `}
          </a>
          <Youtube href={youtube} className="icon" />
          <span> e, se vuoi, aggiungi i tuoi video.</span>
        </li>
        <li>
          <span>Ascolta i podcast </span>
          <a href={spotify_piontacast_2051} className="underline">
            {`Pionta-Cast 2051 `}
          </a>
          <Spotify href={spotify_piontacast_2051} className="icon" />
          <span> e </span>
          <a href={spotify_tetti_rossi} className="underline">
            {`Storie Dai Tetti Rossi `}
          </a>
          <Spotify href={spotify_tetti_rossi} className="icon" />
          <span> su Spotify.</span>
        </li>
      </ul>
    </article>
  )
}
