import Cards from '../Cards';
import { Row, Col } from 'react-bootstrap';
import profilePic from '../../pics/agent.jpg'
import postPic from '../../pics/allcus.png'
import findService from '../../pics/fone.png'
import logoutSrc from '../../pics/exit.png'

function ClientDashboard() {
  const fun=()=>{
    alert();
  }
  return (
    <div style={{ margin: '20px' }}>
      <Row className="justify-content-md-center">
        <Col md={3}>
          <Cards title="Profile page" link={'/client-profile'} imgSrc={profilePic} desc={'Complete your profile with essential information, including your contact details, skills, and a brief bio, to present a comprehensive picture to others.'}/>
        </Col>
        <Col md={3}>
          <Cards title="Post Req" link={'/client-post-req'} imgSrc={postPic} desc={'Welcome to our service posting platform! If you are in need of expert services such as plumbing, electrical work, or mechanical assistance, you are in the right place. Post your specific requirements here.'} />
        </Col>
        <Col md={3}>
          <Cards title="Find Service Provider" link={'/client-find-service-provider'} imgSrc={findService} desc={'Looking for skilled professionals to cater to your service needs? Explore our platform to discover a diverse range of service providers, including plumbers, electricians, and mechanics.'} />
        </Col>
        <Col md={3}>
          <Cards title="Logout" link={'/'} imgSrc={logoutSrc} desc={'Logout functionality is crucial in web applications to ensure secure user sessions. '}/>
        </Col>
      </Row>
    </div>
  );
}

export default ClientDashboard;