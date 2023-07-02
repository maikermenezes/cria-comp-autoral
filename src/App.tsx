import { MainContainer } from "./style";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { Banner } from "./banner";
import { Gallery } from "./gallery";

function App() {
  return (
    <MainContainer>
      <NavBar />
      <Banner />
      <Gallery />
      <Footer />
    </MainContainer>
  );
}

export default App;
