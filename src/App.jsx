import Articles from './components/Articles';
import User from './components/User';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>React Skeletons</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
