import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithProps from './components/StatefulGreetingWithProps';
import StatefulGreetingWithProps from './components/StatefulGreetingWithProps';

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
      <StatefulGreeting />
      <StatefulGreetingWithProps name="John", greeting="from StatefulGreeting2" />
    </div>
  );
}

export default App;
