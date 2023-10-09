import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProgresA from './forms/ProgresA';
import ProgresB from './forms/ProgresB';
import ProgresC from './forms/ProgresC';



function App() {

  const myAllroute = [
    { path: "/", element: <HomePage/> },
    { path: "/progresa", element: <ProgresA/> },
    { path: "/progresb", element: <ProgresB/> },
    { path: "/progresc", element: <ProgresC/> },
  
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
