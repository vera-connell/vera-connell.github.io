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
          <div className="info2">
            <p>
              Star-crossed was conceived as an online dating service with a user
              experience similar to other popular mobile dating apps. The point
              of difference for our product was that we would calculate and
              display the compatibility of your potential dates based on both of
              your star signs. The implementation we ended up with was very
              simple, with hardcoded values for compatibility between each star
              sign, but the sky's the limit for future iterations! <br /> <br />{' '}
              Initially we considered building the frontend app with react
              native to run on mobile, but given the time constraints we decided
              to use vanilla react, which we were more familiar with. I was
              still really keen to pick up a new technology for the project, so
              we settled on creating the backend API with Ruby on Rails. This
              ended up being a really rewarding experience! In just a week, we
              figured out how to handle CRUD operations in the framework and
              even use the Active Storage gem to handle image uploads from the
              frontend app and serve them from the backend!
            </p>
          </div>
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
