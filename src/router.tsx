import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import History from './views/History'
import Layout from './layout/Layout'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/History' element={<History />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
