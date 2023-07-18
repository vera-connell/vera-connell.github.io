import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="item1">
          <h1>Vera Connell</h1>
          <p>web developer</p>
        </div>
        <div className="item2">Menu</div>
        <div className="item3">
          <img
            className="app-logo"
            src="images/magic-mykes-logo.png"
            alt="magic-mykes-logo"
          />
        </div>
        <div className="item4">Right</div>
        <div className="item5">about</div>
      </div>
    </div>
  )
}
