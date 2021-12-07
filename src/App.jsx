import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Error from './components/Error'
import Survey from './pages/Survey/index'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 1.5rem 10rem;
        font-family: 'Trebuchet MS';
    }
`
const App = () => {
    return (
        <div className='App'>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/survey/:questionNumber' element={<Survey />} />
                <Route path='/results' element={<Results />} />
                <Route path='/freelances' element={<Freelances />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </div>
    )
}

export default App
