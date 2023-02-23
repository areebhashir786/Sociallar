import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/User';
import Account from './Components/Account/Account';
import Register from './Components/Register/Register';
import NewPost from './Components/NewPost/NewPost';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import UpdatePassword from './Components/UpdatePassword/UpdatePassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import UserProfile from './Components/UserProfile/UserProfile';
import Search from './Components/Search/Search';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/account" element={isAuthenticated ? <Account /> : <Login />} />
        <Route path="/newpost" element={isAuthenticated ? <NewPost /> : <Login />} />
        <Route path="/update/profile" element={isAuthenticated ? <UpdateProfile /> : <Login />} />
        <Route path="/update/password" element={isAuthenticated ? <UpdatePassword /> : <Login />} />
        <Route path="/forgot/password" element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />} />
        <Route path="/password/reset/:token" element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />} />
        <Route path="/user/:id" element={isAuthenticated ? <UserProfile /> : <Login />} />
        <Route path="/user/posts/:id" element={isAuthenticated ? <UserProfile /> : <Login />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
