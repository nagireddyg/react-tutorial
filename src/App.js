
import './App.css';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Hello >
        {/* what is placed here is passed as props.children   */}
        Welcome to React js tutorial

      </Hello>

    </div>
  );
}

export default App;
