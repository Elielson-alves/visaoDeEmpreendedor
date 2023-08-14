import './App.css';
import Header from './Header';
import Router from '../router';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <div className='teste'>
        <Router />
      </div>
        <Footer />
    </BrowserRouter>

  )
}

export default App;