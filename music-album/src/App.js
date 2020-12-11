import './App.css';
import PublicRoute from './Router/Public-router';
import PrivateRoute from './Router/Private-router';

function App() {
  return (
    <div className="App">
      <PublicRoute/>
      <PrivateRoute/>
    </div>
  );
}

export default App;
