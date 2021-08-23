import './App.css';
import Nav from './components/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hotjar } from 'react-hotjar';
require('dotenv').config();

hotjar.initialize(process.env.REACT_APP_HOTJAR_SITEID);

function App() {
  return (
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
    </div>
  );
}

export default App;
