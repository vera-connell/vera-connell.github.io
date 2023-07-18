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
          <div className="info2">
            <p>
              Happy Magic Petland is a throwback project to the forum clickies
              of yore, an anachronistic feature of message boards everywhere in
              the early 2000s. The premise of these services is that the user
              makes an account and generates a link to a clickable image that
              they embed on other websites. When it receives enough clicks, the
              user is rewarded somehow!
              <br />
              <br />
              This project never got as far as that, but I think that the
              product still has a similar sense of fun. Users can create a
              profile, choose a mystery egg and receive the pet under their
              name! The app uses express and handlebars in a very simple node.js
              stack, but this is a concept I’d really like to revisit with a
              more sophisticated stack including authentication and a better
              templating engine. I think that there’s something delightful about
              the concept of virtual pets, and there are a lot of game-adjacent
              elements I would like to incorporate into a project like this.
            </p>
          </div>
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
