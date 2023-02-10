import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './pages/SharedLayout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<div>index</div>} />
          <Route path='/about' element={<div>about me</div>} />
          <Route path='/projects' element={<div>projects</div>} />
          <Route path='/contact' element={<div>contact</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
