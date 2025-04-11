import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home/home'
import Header from './Comps/Header/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} Component={Home} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
