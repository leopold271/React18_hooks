import './App.css';
import TransitionExample from './examples/useTransition';
import DefferedValueExample from './examples/useDefferedValue';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DefferedValueExample/>} path="def"/>
      <Route element={<TransitionExample/>} path="trans" />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
