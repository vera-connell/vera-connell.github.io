import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="item1">
          <h1>Vera Connell</h1>
          <p>web developer</p>
        </div>
        <div className="item2">
          <h2 className="star-crossed-header">Star-Crossed</h2>
          <img
            className="logo-gif"
            src="images/starcrossed.gif"
            alt="star-crossed splash"
          />
          <p>
            A dating app for those concerned with cosmic compatibility. A
            mobile-focused user experience that connects to a Ruby on Rails API.
          </p>
          <Link to="/star-crossed">
            <button>More</button>
          </Link>
        </div>
        <div className="item3">
          <img
            className="app-logo"
            src="images/magic-mykes-logo.png"
            alt="magic-mykes-logo"
          />
          <p>
            Magic Myke's Mystical Emporium is a react website that leverages the
            ChatGPT language model's fortune telling capabilities.
          </p>
          <Link to="/magic-mykes">
            <button>More</button>
          </Link>
        </div>
        <div className="item4">
          <h2 className="petland-header">Happy Magic Pet Land</h2>
          <img className="logo-gif" src="images/cat.gif" alt="petland-logo" />
          <p>A simple but fun mystery pet adoption service!</p>
          <Link to="/petland">
            <button>More</button>
          </Link>
        </div>
        <div className="item5">about</div>
      </div>
    </div>
  )
}
