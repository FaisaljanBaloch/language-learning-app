import { Routes, Route } from 'react-router-dom'

// import pages here
import StartPage from './pages/StartPage'
import LessonPage from './pages/LessonPage'

function App() {
    return (
    <Routes>
        <Route path='' element={<StartPage />} />
        <Route path='lessons' element={<LessonPage />} />
    </Routes>
    )
}

export default App