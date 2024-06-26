import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Cart' element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
