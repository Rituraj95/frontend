import Container from 'react-bootstrap/Container';
import {Navbar, Nav, Row, Col, Image, Form, Button, ListGroup} from 'react-bootstrap';
import TU_Logo from '../../resource/tu-logo.png';
import IEEELogo from '../../resource/IEEE-Logo.jpg';
import './Navbar.css'

function SiteHeader() {
  return (
    <div>
        <div id='navbar' style={{ 
            width: '84%',
            margin: '0 8%',
            height:'8rem',
            backgroundColor:'#0a75ad',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
        }}>
            <div>
                <img src={TU_Logo} alt='' style={{ width:'7rem' }}/>
            </div>
            <div>
                <h1 style={{ 
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight:'600',
                    color:'white'
                 }}>IEEE Tezpur University Student Branch</h1>
            </div>
            <div style={{ 
                // display:'flex',
                // flexDirection:'row',  if needed decomment them 
                // justifyContent:'flex-end',
                // alignItems:'center',
             }}>
                <img src={IEEELogo} alt='' style={{ width:'10rem' }}/>
            </div>
            
        </div>
        <div>
            <ListGroup horizontal style={{ 
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                fontFamily: "'Nunito', sans-serif",
                fontWeight:'400',
                color:'white',
                fontSize:'1.3rem',
                margin: '5px 0 1rem 0',
                // textDecoration:'underline #0a75ad 3px'
            }}>
                <ListGroup.Item style={{ margin:'0 3rem', padding:'1rem 1rem 0.2rem 1rem', border:'none', borderBottom:'5px solid #0a75ad' }} >About</ListGroup.Item>
                <ListGroup.Item style={{ margin:'0 3rem', padding:'1rem 1rem 0.2rem 1rem', border:'none', borderBottom:'5px solid #0a75ad' }} >Membership</ListGroup.Item>
                <ListGroup.Item style={{ margin:'0 3rem', padding:'1rem 1rem 0.2rem 1rem', border:'none', borderBottom:'5px solid #0a75ad' }} >Community</ListGroup.Item>
                <ListGroup.Item style={{ margin:'0 3rem', padding:'1rem 1rem 0.2rem 1rem', border:'none', borderBottom:'5px solid #0a75ad' }} >Conferences</ListGroup.Item>
                <ListGroup.Item style={{ margin:'0 3rem', padding:'1rem 1rem 0.2rem 1rem', border:'none', borderBottom:'5px solid #0a75ad' }} >publication</ListGroup.Item>
            </ListGroup>
        </div>

    </div>
  );
}

export default SiteHeader;