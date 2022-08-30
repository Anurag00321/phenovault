
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom" ;
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home' ;
import DashBoard  from './components/DashBoard';
import ForgotPassword from './components/forgotPassword'
import {AuthProvider} from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <div className="App">
      <Routes>    
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element = {<DashBoard/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element ={<ForgotPassword/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
