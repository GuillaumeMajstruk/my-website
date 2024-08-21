import './App.css';
import Nav from './components/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Copyright } from './views';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
require('dotenv').config();

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="container">
          <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
          <Nav />
          <Copyright />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
