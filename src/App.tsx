
import './App.css'

import Home from '@/pages/Home'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Information from './pages/Information'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='info' element={<Information />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
