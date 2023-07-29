import './App.css'
import {Container,Row} from 'react-bootstrap';
import MaiCard from './components/MaiCard';
const App=()=> {

  return (
    <Container fluid>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <MaiCard title={"Suivie des taches"}/>
      </Row>
    </Container>
  );
}

export default App
