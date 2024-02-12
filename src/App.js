import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHeader from './components/Navbar/Navbar';

import Boxx from './components/Boxx/Boxx';
import Form from './components/User/Form/Form'
import Filterbox from './components/FIlterbox/FIlterbox'

import Footer  from './components/Footer/Footer';
import Login from './components/User/Login';
import Register from './components/User/Reg';
import Regi from './components/Regi/Regi'




function App() {
  return (
    <div className="App">
      <SiteHeader />
      <div style={{ 
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
       }}>
       
         

      
   

      </div>
      <div
      style={{
        justifyContent:'center',
        display: 'flex'
      }} 
      >
       <div>
        <Filterbox></Filterbox>
       </div>
        <div>
          <Boxx></Boxx>
        </div>
     
  
      
        
    



      
  
     

    

      </div>
     
      <div>
       
      </div>
     
    
     
     


        

    

      
   

    </div>
  );
}

export default App;
