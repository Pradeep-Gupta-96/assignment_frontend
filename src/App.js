import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProgresA from './forms/ProgresA';
import ProgresB from './forms/ProgresB';
import ProgresC from './forms/ProgresC';
import TestBoard from './forms/TestBoard';
import Successpage from './forms/Successpage';
import Dashboard from './Dashboard/Dashboard';
import FinalStep from './Secondtest/FinalStep';
import Finalsuccess from './Secondtest/Finalsuccess';
import Practices from './Secondtest/Practices';




function App() {

  const myAllroute = [
    { path: "/", element: <HomePage/> },
    { path: "/testboard", element: <TestBoard/> },
    { path: "/progresa", element: <ProgresA/> },
    { path: "/progresb/:id", element: <ProgresB/> },
    { path: "/progresc/:id", element: <ProgresC/> },
    { path: "/successpage", element: <Successpage/> },
    { path: "/dashboard", element: <Dashboard/> },
    { path: "/finalStep", element: <FinalStep/> },
    { path: "/finalsuccess", element: <Finalsuccess/> },
    { path: "/Practices", element: <Practices/> },
  
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
