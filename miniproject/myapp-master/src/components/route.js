import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './nav'
import Home from './home'
import About from './About'
import Books from './booklist'
import Transaction from './transaction'
// import Footer from './footer'

function Path() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/booklist' element={<Books />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  )
}


export default Path
