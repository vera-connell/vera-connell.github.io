import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import { StarCrossed } from './components/StarCrossed'
import { Home } from './components/Home'
import { MagicMykes } from './components/MagicMykes'
import { Petland } from './components/Petland'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/star-crossed" element={<StarCrossed />} />
      <Route path="/magic-mykes" element={<MagicMykes />} />
      <Route path="/petland" element={<Petland />} />
    </Route>
  )
)

export default router
