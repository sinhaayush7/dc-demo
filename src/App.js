
import './App.css';
import { EntryPage } from './pages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App h-screen">
      < ToastContainer />
      <EntryPage />
    </div>
  );
}

export default App;
