import { Route, Routes } from 'react-router-dom';
import Address from '../src/components/Address';
import News from '../src/components/News';

export default () => (
    <Routes>
        <Route path = '/' element = { <News/> } />
        <Route path = "address" element = { <Address/> } />
    </Routes>
)

