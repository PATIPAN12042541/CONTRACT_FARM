import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import SidebarAdmin from "./components/SidebarAdmin";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><SidebarAdmin /><Content /><Footer /></>}></Route>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
