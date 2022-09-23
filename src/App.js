import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, About, Error, Listings, Realtors, Contact} from './pages'
import {Navbar} from './components'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/listings" element={<Listings />}/>
        <Route exact path="/realtors" element={<Realtors />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
