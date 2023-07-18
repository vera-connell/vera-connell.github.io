import { Link } from 'react-router-dom'

export function MagicMykes() {
  return (
    <>
      <div className="home">
        <Link to="/">
          <img className="home-icon" src="images/home.png" alt="home icon" />
        </Link>
      </div>
      <div className="container">
        <div className="project-grid">
          <div className="info1">Magic Myke's Mystical Emporium</div>
          <div className="info2">info</div>
          <div className="info3">capture</div>
          <div className="info4">
            <Link to="https://github.com/vera-connell/star-crossed-api/tree/dev">
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
