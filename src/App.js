import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, About, Error, Listings, Realtors} from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/listings" element={<Listings />}/>
        <Route exact path="/realtors" element={<Realtors />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
