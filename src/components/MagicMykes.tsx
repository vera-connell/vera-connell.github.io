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
          <div className="info2">
            <p>
              Magic Myke’s Mystical Emporium came about from the novelty of
              being able to use OpenAI’s ChatGPT language model to dynamically
              generate text from a prompt with often humorous results. Using a
              React form, the app takes a little information from the user and
              interpolates it into a premade prompt before making a request to
              the OpenAI API. <br /> <br /> This was one of our one-day projects
              at Dev Academy, and our small and tight-knit team managed to
              deliver a really fun product given the time constraints. We also
              gleaned some really interesting insights about the language model
              while we were developing our prompts! It was an enlightening way
              to experience both the power and the shortcomings of the
              technology.
            </p>
          </div>
          <div className="info3">
            <img
              className="star-crossed-demo"
              src="images/mykes.PNG"
              alt="magic myke's ui"
            />
          </div>
          <div className="info4">
            <Link to="https://github.com/vera-connell/Magic-Mikes-Mystical-Emporium">
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
