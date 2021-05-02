import './App.css';
import React,{useState} from 'react'
import {  ButtonToolbar, Button,Card,Navbar,Nav } from 'react-bootstrap'
import plasma from './plasma.gif';

function App() {
  const [show,setShow]=useState(false);
  const [showR,setShowR]=useState(false);
    
  return (
    <div className="App">
      
      <Navbar className="color-navb" variant="dark">
    <Navbar.Brand className="navbar">Yavatmal-Cares</Navbar.Brand>
    </Navbar>
    

      <Card className="text-center">
      <Card.Img variant="top" src={plasma} alt="test" />
        <Card.Body>
          <Card.Title>Plasma Donation and Request</Card.Title>
          <Card.Text>Fill one of these forms.</Card.Text>
          <Card.Text>Our team will match relevant donors and patients and put them in touch with each other.</Card.Text>
          <Card.Text> We are a group of volunteers helping our city get over this COVID-19 crisis.</Card.Text>

          <ButtonToolbar className="custom-btn-toolbar">
            <Button onClick={()=>{setShow(!show); setShowR(false)}}>{show?'Close Donation Form':'Donate Plasma'}</Button>
            <Button onClick={()=>{setShowR(!showR); setShow(false)}}>{showR?'Close Request Form':'Request Plasma'}</Button>
          </ButtonToolbar>
        </Card.Body>
      </Card>
     
        <div className="Box">
              { 
              show?
              <iframe class="airtable-embed" src="https://airtable.com/embed/shr6Pf2Dc3odgIVpc?backgroundColor=yellow" 
              frameborder="0" onmousewheel="" width="100%" height="533" 
              styles="background: transparent; border: 1px solid #ccc;">
              </iframe>
              :null}
              {
              showR?
              <iframe class="airtable-embed" src="https://airtable.com/embed/shrlPtj561qqfHLok?backgroundColor=yellow" 
              frameborder="0" onmousewheel="" width="100%" height="533" 
              styles="background: transparent; border: 1px solid #ccc;"/>:null
              } 
        </div>

        <Navbar className="justify-content-end" fixed="bottom">
          <Navbar.Text >
            Developer: <a href="https://github.com/AdityaChondke">Aditya Chondke</a>
          </Navbar.Text>
      </Navbar>
    
    </div>
  );
}

export default App;
