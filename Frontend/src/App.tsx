import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import { refresh } from './app/store/auth/thunk';
import './App.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import SelectedNews from './pages/SelectedNews';
import News from './pages/News';

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(refresh())
  }, [])

  return (
    <div className='w-full h-screen font-serif'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/selected-news" element={<SelectedNews />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
