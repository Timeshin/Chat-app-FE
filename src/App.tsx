import { Navigate, Routes, Route } from 'react-router'

import { AuthPage, MainPage } from 'Pages'
import { AuthLayout } from 'Layouts'

const App = () => (
  <Routes>
    <Route path='/' element={<AuthLayout />}>
      <Route index element={<MainPage />} />
      <Route path='auth' element={<AuthPage />} />
    </Route>
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default App
