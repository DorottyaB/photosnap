import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.component';
import Main from './components/main/Main.component';
import Stories from './components/stories/stories.component';

function App() {
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
