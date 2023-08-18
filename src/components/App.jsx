import './App.css';
import Header from './Header';
import Router from '../router';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Router />
        <Footer />
    </BrowserRouter>

  )
}

export default App;