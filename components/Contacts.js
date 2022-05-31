export const Contacts = ({ email }) => {
  return (
    <article className="flow" id={'Contatti'}>
      <h2>
        <span>Contatti</span>
      </h2>
      <address>
        <a href={`mailto:${email}`}>{email}</a>
      </address>
    </article>
  )
}
