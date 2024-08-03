import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreeting /> <strong>again!</strong>
      <FunctionalGreeting /> <strong>and again!</strong>
      <FunctionalGreetingWithProps />
      <FunctionalGreetingWithProps greeting="nice to meet you" />
      <FunctionalGreetingWithProps greeting="nice to meet you " name="Jim" />
      <FunctionalGreetingWithProps greeting="nice to meet you at " age="65" />
    </div>
  );
}

export default App;
