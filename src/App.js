import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Home, ContactForm, Listings, Error, Realtors} from './pages'
import {Navbar, MobileNav, Footer} from './components'
import SingleProperty from './pages/SinglePropertyPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <MobileNav />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/listings" element={<Listings />}/>
        <Route path="/realtors" element={<Realtors />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/listings/:id" element={<SingleProperty />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

