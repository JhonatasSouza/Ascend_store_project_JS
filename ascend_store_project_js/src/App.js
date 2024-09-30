import './App.css';
import{ browsersRoute } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './router';

function App() {
  return (
    <browsersRouter>
      <Router />
      <Toaster />
    </browsersRouter>
  );
}

export default App;
