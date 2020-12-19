import "./App.css";
import Navbar from "./components/Navbar";
import { withRouter, BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home  from './pages/Home'
import Signup from "./pages/Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./context/AuthContext";
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import AdminLogin from './pages/AdminLogin'


const    App = ({location}) => {
  return (
    <>
    
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact component={Login}/>
            <PrivateRoute path='/home' exact component={Home}/>
            <PrivateRoute path='/Admin' exact component={AdminLogin}/>
          <Route path='/Signup' exact component={Signup}/>
          <Route path='/login'  component={Login}/>
          <Route path='/forgot-password'  component={ForgotPassword}/>
        </Switch>
      </Router>
    </AuthProvider>
  </>
  );
}

export default App;
