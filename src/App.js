import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Container } from "react-bootstrap";
const App = () =>{
  const design=(
      <>
      <BrowserRouter> 
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<h1 style={{backgroundColor:"red"}}>welcome to home wensite</h1>}/>
          <Route path="/link" element={<h2 style={{backgroundColor:'gray'}}>Our Community.</h2>} />
          <Route path="/services" element={<h3>serviices  eff</h3>} />
          {/* Route for content under dropdown  */}
          <Route path="/bd" element={<h2 style={{backgroundColor:"green", fontStyle:'italic'}}>What do you know about our business</h2>} />
          <Route path="/advertise" element={<h2>World Best Adevvrtisemnet servvices for all fieled.</h2>} />
        </Routes>
      </Container>
      <Footer />
      </BrowserRouter>
     
      </>
  );
  return design;
}
export default App;