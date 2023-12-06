import React from 'react'
import './Courses.css'
import Card from 'react-bootstrap/Card';
import Navbar from '../Navbar/Navbar';
import fiverr from '../../Assets/Fiverr.png'
import web from '../../Assets/webDevelopment.png'
import java from '../../Assets/javaDevelopment.png'
import python from '../../Assets/pythonProgramming.png'
import cyber from '../../Assets/Cybersecurity.png';
import uiux from '../../Assets/UiUX.png'

const Courses = () => {
  return (
    <div className="courses">
        <Navbar/>
        <div className="content">
        <div className="row">
        <Card style={{ width: '18rem' ,}}>
        <Card.Img variant="top" src={fiverr} style={{width:'15rem', height:'12rem'}} />
        <Card.Body>
        <Card.Title style={{fontSize:'20px' ,fontWeight:'bold'}}>Fiverr</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={web} style={{width:'15rem', height:'12rem'}} />
        <Card.Body>
        <Card.Title style={{fontSize:'20px' ,fontWeight:'bold'}}>Web development</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem', }}>
        <Card.Img variant="top" src={java} style={{width:'15rem', height:'12rem'}} />
        <Card.Body>
        <Card.Title style={{fontSize:'20px' ,fontWeight:'bold'}}>Java programming</Card.Title>
        </Card.Body>
        </Card>
        </div>
        
        <div className="row">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={python} style={{width:'15rem', height:'12rem'}} />
        <Card.Body>
        <Card.Title style={{fontSize:'20px' ,fontWeight:'bold'}}>Python programming</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cyber} style={{width:'15rem', height:'12rem'}} />
        <Card.Body>
        <Card.Title style={{fontSize:'20px' ,fontWeight:'bold'}}>Cryber security</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={uiux} style={{width:'15rem', height:'12rem'}} />
        <Card.Body>
        <Card.Title style={{fontSize:'20px' ,fontWeight:'bold'}}>UIUX</Card.Title>
        </Card.Body>
        </Card>
        </div>
        </div>
        
       
    </div>
  )
}

export default Courses