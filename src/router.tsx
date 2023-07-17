import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import Thingy from './components/Thingy'
import { Home } from './components/Home'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/thing" element={<Thingy />} />
    </Route>
  )
)

export default router
