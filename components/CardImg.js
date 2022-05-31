import { Twitter } from './Twitter'

export const CardImg = ({ description, title, image }) => {
  return (
    <article className="flow frame aspect-ratio:16/9" id={title}>
      <h2>
        <span>{title} </span>
        <Twitter href={'https://twitter.com/jackdbd/'} />
      </h2>
      <img src={image.src} alt={image.alt} />
      <p className="box" style={{ border: '1px solid var(--color-headings)' }}>
        {description}
      </p>
    </article>
  )
}
