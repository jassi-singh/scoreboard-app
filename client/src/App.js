import Header from './components/Header.js';
import Scoreboard from './components/Scoreboard.js';

function App() {
  return (
    <div className="App">
        <div className="container">
          <Header teamA='Ind' teamB='Eng' />
          <Scoreboard />
        </div>
    </div>
  );
}

export default App;