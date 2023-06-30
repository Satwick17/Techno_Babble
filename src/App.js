
import Pagination from "./componentes/Pagination";
import Search from "./componentes/Search";
import Stories from "./componentes/Stories";
import "./App.css";
import Header from "./componentes/Header";
import Particle from "./componentes/Particle";
import Footer from "./componentes/Footer";
import { useGlobalhook } from "./Context";
import { ClipLoader } from "react-spinners";




function App() {
  const {loading} = useGlobalhook();
  return (
   
      
      <>
      <Particle/>
      <Header/>
      <Search/>
      
      { loading ? <div className="cont"><ClipLoader size= {130} color="white"/> </div>:
        <div>
      <Stories/>
      <Pagination/>
      <Footer/>
      </div>}
      </>
     
    
  );
}

export default App;
