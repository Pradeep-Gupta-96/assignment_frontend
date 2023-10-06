import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {

  const myAllroute = [
    { path: "/", element: <HomePage/> },
  ]
  
  return (
    <>
     <Router>
        <Routes>
          {myAllroute.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
