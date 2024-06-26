import './App.css';
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import ListComment from './components/ListComment';
import Clock from './components/Clock';
import Form from './components/Form'
import ImageSearch from './components/ImageSearch';

function App() {
  return (
    //menampung component yang telah diimport
   <div>
    <Navbar/>
    {/* <Clock/>
    <Content/>
    <ListComment/>  */}
    <Form/>
    <ImageSearch/>
   </div>
  );
}

export default App;
