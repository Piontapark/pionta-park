export const Youtube = ({ href }) => {
  return (
    <a className="icon" href={href}>
      <svg
        className="align-baseline icon"
        height="2em"
        viewBox="0 0 24 24"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="#fff" x="4" y="4" width="16" height="16" />
        <path
          clipRule="evenodd"
          fill="#e62117"
          fillRule="evenodd"
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
        />
      </svg>
    </a>
  )
}
