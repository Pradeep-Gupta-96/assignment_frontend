import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProgresA from './forms/ProgresA';
import ProgresB from './forms/ProgresB';
import ProgresC from './forms/ProgresC';
import TestBoard from './forms/TestBoard';
import Successpage from './forms/Successpage';
import Dashboard from './Dashboard/Dashboard';
import Practices from './Secondtest/Practices';
import ProgresD from './forms/ProgresD';
import PsychometricTest from './psychometricTest/PsychometricTest';
import PsychometricSuccess from './psychometricTest/PsychometricSuccess';




function App() {

  const myAllroute = [
    { path: "/", element: <HomePage/> },
    { path: "/testboard", element: <TestBoard/> },
    { path: "/progresa", element: <ProgresA/> },
    { path: "/progresb/:id", element: <ProgresB/> },
    { path: "/progresc/:id", element: <ProgresC/> },
    { path: "/Progresd/:id", element: <ProgresD/> },
    { path: "/successpage", element: <Successpage/> },
    { path: "/dashboard", element: <Dashboard/> },
    { path: "/practices", element: <Practices/> },
    { path: "/PsychometricTest", element: <PsychometricTest/> },
    { path: "/PsychometricSuccess", element: <PsychometricSuccess/> },
  
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
