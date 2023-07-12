import { MainContainer, BackgroundImg } from "./style";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { Banner } from "./banner";
import { Gallery } from "./gallery"; 
import Vector from "./assets/Vector.png";

function App() {
  return (
    <MainContainer>
      <NavBar />
      <Banner />
      <Gallery />
      <Footer />
      <BackgroundImg src={Vector}/>
    </MainContainer>
  );
}

export default App;
