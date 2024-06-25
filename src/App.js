import './App.css';
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import ListComment from './components/ListComment';
import Clock from './components/Clock';

function App() {
  return (
    //menampung component yang telah diimport
   <div>
    <Navbar/>
    <Content/>
    <ListComment/>
    <Clock/>
   </div>
  );
}

export default App;
