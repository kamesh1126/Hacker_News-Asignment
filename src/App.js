import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './components/MainRoutes';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import NewPage from './Pages/NewPage';
import SearchPage from './Pages/SearchPage';


function App() {
  return (
    <div className="App">
    <MainRoutes/>
    {/* <Login/> */}
    {/* <HomePage/> */}
    {/* <SearchPage/> */}
    {/* <NewPage/> */}
    </div>
  );
}

export default App;
