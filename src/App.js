import './App.css';
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import ListComment from './components/ListComment';

function App() {
  return (
    //menampung component yang telah diimport
   <div>
    <Navbar/>
    <Content/>
    <ListComment/>
   </div>
  );
}

export default App;
