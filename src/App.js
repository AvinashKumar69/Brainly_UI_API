import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LoggedinHomePage from './loggedinPages/LoggedinHomePage';
import AskQuestion from './pages/AskQuestion';
import Home from './pages/Home';
import JoinNowPage from './pages/JoinNowPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/loginpage' element={<LoginPage />} />
        <Route exact path='/joinnowpage' element={<JoinNowPage />} />
        <Route exact path='/askquestion' element={<AskQuestion />} />
        <Route exact path='/loggedinhomepage' element={<LoggedinHomePage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
