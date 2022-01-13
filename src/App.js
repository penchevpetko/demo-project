import Continent from "./components/Continent";
import { Route } from 'react-router-dom';
import TestPage from "./components/TestPage";

function App() {
  return (  
    <div>
      <Route path='/' exact>
        <h2>Welcome to the world of capitals!</h2>
        <p>It`s time to show how good you are!</p>
        <Continent />
      </Route>
      <Route path='/:testId'>
       <TestPage />
      </Route>
      </div>
  );
}

export default App;
