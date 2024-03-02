import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import AppLayout from "./components/layout/layout";
import TenkeyLess from "./pages/tkl";
import FullSize from "./pages/fullSize";
import S75percent from "./pages/75percent";
import WinkeyLess from "./pages/wkl";
import FncRowLess from "./pages/frl";
import NearFullSize from "./pages/nearfullsize";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/fullsize' element={<FullSize />} />
          <Route path='/nearfullsize' element={<NearFullSize />} />
          <Route path='/tkl' element={<TenkeyLess />} />
          <Route path='/wkl' element={<WinkeyLess />} />
          <Route path='/75percent' element={<S75percent />} />
          <Route path='/frl' element={<FncRowLess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
