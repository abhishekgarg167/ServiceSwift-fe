import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from '../axioss/Signup';
import Login from '../axioss/Login';
import ClientProfile from './client/ClientProfile';
import ProviderProfile from './provider/ProviderProfile';
import ClientDashboard from './client/ClientDashboard';
import ProviderDashboard1 from './provider/ProfileDashboard';
import PostReq from './client/PostReq';
import FindServiceProvider from './client/FindServiceProvider';
import HomePage from './HomePage';

function NavbarComp({setShowLogin}) {
  return (
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login setShowLogin={setShowLogin}/>}></Route>
        <Route path='/client' element={<ClientDashboard />}></Route>
        <Route path='/client-profile' element={<ClientProfile />}></Route>
        <Route path='/client-post-req' element={<PostReq />}></Route>
        <Route path='/client-find-service-provider' element={<FindServiceProvider />}></Route>
        <Route path='/provider' element={<ProviderDashboard1 />}></Route>
        <Route path='/provider-profile' element={<ProviderProfile />}></Route>
    </Routes>

    </BrowserRouter>
  );
}

export default NavbarComp;