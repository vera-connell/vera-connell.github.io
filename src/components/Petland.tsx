import { Link } from 'react-router-dom'

export function Petland() {
  return (
    <>
      <div className="home">
        <Link to="/">
          <img className="home-icon" src="images/home.png" alt="home icon" />
        </Link>
      </div>
      <div className="container">
        <div className="project-grid">
          <div className="info1">Happy Magic Pet Land</div>
          <div className="info2">info</div>
          <div className="info3">
            <img
              className="star-crossed-demo"
              src="images/petland.PNG"
              alt="pet screenshot"
            />
          </div>
          <div className="info4">
            <Link to="https://github.com/vera-connell/happy-magic-petland/tree/vera-code-quality">
              <img
                className="home-icon"
                src="images/github-mark.png"
                alt="github link"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}