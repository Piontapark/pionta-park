export const Card = ({ description, title, children, icon }) => {
  let style = {}
  switch (title) {
    case 'Cultura': {
      style = {
        '--color-headings': 'var(--color-byzantium)',
        '--color-slider': 'var(--color-byzantium)'
      }
      break
    }
    case 'Educazione': {
      style = {
        '--color-headings': 'var(--color-salamander)',
        '--color-slider': 'var(--color-salamander)'
      }
      break
    }
    case 'Storia': {
      style = {
        '--color-headings': 'var(--color-venetian-red)',
        '--color-slider': 'var(--color-venetian-red)'
      }
      break
    }
    default: {
      style = {
        '--color-headings': 'var(--color-apple)',
        '--color-slider': 'var(--color-apple)'
      }
    }
  }

  return (
    <article className="flow" id={title} style={style}>
      {icon ? (
        <h2>
          <span>
            {title} {icon}
          </span>
        </h2>
      ) : (
        <h2>{title}</h2>
      )}
      {children}
      <p
        className="italic rounded-lg bg-slate-200 box"
        style={{ border: '1px solid var(--color-headings)' }}
        // style={{
        //   backgroundImage: 'url(/elements/wave3-green.svg)',
        //   backgroundPosition: '100% 100%',
        //   backgroundRepeat: 'no-repeat'
        // }}
      >
        {description}
      </p>
    </article>
  )
}
