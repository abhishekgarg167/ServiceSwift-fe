import Cards from '../Cards';
import { Row, Col } from 'react-bootstrap';
import profilePic from '../../pics/agent.jpg'
import logoutSrc from '../../pics/exit.png'

function ProviderDashboard() {
  return (
    
    <div style={{ margin: '20px' }}>
      <Row className="justify-content-md-center">
        <Col md={3}>
          <Cards title="Profile page" link={'/provider-profile'} imgSrc={profilePic} desc={'Complete your profile with essential information, including your contact details, skills, and a brief bio, to present a comprehensive picture to others.'}/>
        </Col>
        <Col md={3}>
          <Cards title="Logout" link={'/'} imgSrc={logoutSrc} desc={'Logout functionality is crucial in web applications to ensure secure user sessions. '}/>
        </Col>
      </Row>
    </div>
  );
}

export default ProviderDashboard;