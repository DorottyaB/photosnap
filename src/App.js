import { Routes, Route } from 'react-router-dom';

import Navbar from './components/shared/navbar/navbar.component';
import Home from './components/home/home.component';
import Stories from './components/stories/stories.component';
import Features from './components/features/features.component';
import Pricing from './components/pricing/pricing.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='stories' element={<Stories />} />
        <Route path='features' element={<Features />} />
        <Route path='pricing' element={<Pricing />} />
      </Route>
    </Routes>
  );
}

export default App;
