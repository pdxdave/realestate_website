import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Home, About, Contact, Listings, Error, Realtors} from './pages'
import {Navbar, MobileNav} from './components'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <MobileNav />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/listings" element={<Listings />}/>
        <Route path="/realtors" element={<Realtors />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

