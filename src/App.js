import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/navbar/Navbar.component';
import Main from './components/main/Main.component';
import Stories from './components/stories/stories.component';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Main />} />
        <Route path='stories' element={<Stories />} />
        <Route path='/' />
        <Route path='/' />
      </Route>
    </Routes>
  );
}

export default App;
