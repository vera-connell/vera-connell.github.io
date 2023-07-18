import { Outlet } from 'react-router-dom'
import pdf from './documents/Vera-Curriculum-Vitae.pdf'

function App() {
  return (
    <div className="App">
      <div className="cv">
        <a href={pdf} target="_blank" rel="noreferrer">
          <img
            className="cv-icon"
            src="images/curriculum-vitae.png"
            alt="clickable cv download"
          />
        </a>
      </div>
      <Outlet />
    </div>
  )
}

export default App
