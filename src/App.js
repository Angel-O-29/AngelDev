
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import HomePage from './containers/HomePage.js';

library.add(fab, faBars, faChevronRight, faChevronLeft)
function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
