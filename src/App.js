
import './CSS/App.css';
import './CSS/NavBar.css';
import './CSS/Banner.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills/>
    </div>
  );
}

export default App;
