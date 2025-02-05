import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import SampleComponent from '@/pages/SampleComponent'

function App() {
  return (
    <Routes>
      <Route
        element={<MainLayout />}
      >
        <Route path='/sample/:id' element={<SampleComponent />} />
        <Route path='/' element={<SampleComponent />} />
      </Route>
    </Routes>
  )
}

export default App
