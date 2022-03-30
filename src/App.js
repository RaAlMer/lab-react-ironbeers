import './App.css';
import { Home, BeersList, Beer, BeerForm } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<Beer />} />
        <Route path="/new-beer" element={<BeerForm />} />
      </Routes>
    </div>
  );
}

export default App;
