import { Nav, Header, About, Contact, Portfolio, Footer, Form } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Nav />
                <Header />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path='/form'
            element={<Form />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
