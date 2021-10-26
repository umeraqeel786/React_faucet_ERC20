import './App.css';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Faucet from './components/Faucet.js'
import TokenSend from './components/TokenSend.js'
import Particles from "react-tsparticles";
function App() {

  const Token = FCTToken;

 
  return (
   
    <div className="App">
     <Container>
   
    <Row className="justify-content-md-center">
      <Col>
      <div>our faucet</div>
      <Faucet  tokenContract={Token}/>
      </Col>
      <Col>
      <div> our send area</div>
      <TokenSend tokenContract={Token}/>
      </Col>
    </Row>
    
    </Container>
   
    </div>
   
  );
  
}


export default App;
