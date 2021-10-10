import logo from './logo.svg';
import './App.css';
import CustomBox from './Box.js';
import BoxContainer from './BoxContainer.js';


const array = [5, 4, 3, 2, 1];

function App() {
    return (
        <div className="App"><BoxContainer array={array}/></div>
    );
}

export default App;