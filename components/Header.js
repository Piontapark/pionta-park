import './header.css'
import { Logo } from './Logo'

export const Header = ({ sections }) => {
  return (
    <header className="header box">
      <ul className="cluster wrapper justify-content:space-between">
        <li>
          <a href="/">
            <h1>
              <Logo />
            </h1>
          </a>
        </li>
        <li>
          <ul className="cluster" data-align="start">
            {sections.map((section) => {
              return (
                <li key={section}>
                  <h3>
                    <a data-section={section} href={`#${section}`}>
                      {section}
                    </a>
                  </h3>
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    </header>
  )
}
