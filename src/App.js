// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import Trade from './pages/Trade';
import Portfolio from './pages/Portfolio';
import { useEffect, useState } from 'react';
import * as client from './api/user';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { appBarClasses } from '@mui/material';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  }
}));

function App() {

  const [user,setUser] = useState(null);

  useEffect(() => {
    client.me().then((response) => setUser(response.data));
  }, []);

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.App}>
        <Header
        user={user}
        setUser={setUser}
        />
        {user ? (
          <>
            <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route exact path="/coins/:id" element={<CoinPage/>} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path='/' element={<Homepage/>}/>
            </Routes>
          </>
        )}
      </div>
    </Router>

  );
}

export default App;
