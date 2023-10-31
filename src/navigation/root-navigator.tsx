import { HomePage } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
