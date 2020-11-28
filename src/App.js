import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home  from './pages/Home'
import Signup from "./pages/Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./context/AuthContext";
import Login from './pages/Login';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Signup' exact component={Signup}/>
          <Route path='/login' exact component={Login}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
