import { Link } from 'react-router-dom'

export function StarCrossed() {
  return (
    <>
      <div className="home">
        <Link to="/">
          <img className="home-icon" src="images/home.png" alt="home icon" />
        </Link>
      </div>
      <div className="container">
        <div className="project-grid">
          <div className="info1">Star-Crossed</div>
          <div className="info2">info</div>
          <div className="info3">
            <img
              className="star-crossed-demo"
              src="images/star-crossed-demo.png"
              alt="some views from star-crossed"
            />
          </div>
          <div className="info4">
            <div className="github-link">
              <Link to="https://github.com/vera-connell/star-crossed-api/tree/dev">
                <img
                  className="home-icon"
                  src="images/github-mark.png"
                  alt="github link"
                />
              </Link>
              <p>Rails API</p>
            </div>
            <div className="github-link">
              <Link to="https://github.com/vera-connell/star-crossed/tree/dev">
                <img
                  className="home-icon"
                  src="images/github-mark.png"
                  alt="github link"
                />
              </Link>
              <p>React App</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
