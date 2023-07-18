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
        <div className="item5">
          <div className="textHolder">
            Hi! My name is Vera, and I’m a web developer based in Aoteoroa/New
            Zealand. <br /> <br />
            I’ve recently become a web developer following a diverse range of
            experiences. I really like the outdoors, and I do a lot of trail
            running and similar sports. I decided to retrain after a stretch of
            working in the trades, which I enjoyed a lot about, but I’d been
            interested in learning to code for a long time and I decided that I
            really needed to do work that had variety and challenging problem
            solving to feel fulfilled. I thought that dev academy would be a
            really good opportunity, because I’ve always excelled at picking up
            skills quickly in practical environments, and a few of my friends
            knew grads who were in successful positions and highly rated the
            program. I picked up some really good productivity and study skills,
            especially pertaining to quickly learning new technologies!
            Something I love about tech is the way developers can innovate and
            surprise people with their creativity!
            <br /> <br />
            This website serves as a portfolio of some of my favourite
            development projects from my time at Dev Academy in Wellington.
            Although the products and execution vary in complexity, what unifies
            these projects for me is the sense of fun involved in bringing them
            to fruition. I had a great time working with the teams I developed
            these projects with to sharpen my skills and learned a huge amount
            about a variety of technologies that were new to me. I’ve recounted
            some of the experiences and insights that came from building each
            one, and you can also check out the source code on github to see
            what’s going on under the hood.
          </div>
        </div>
      </div>
    </div>
  )
}
