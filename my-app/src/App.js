import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreeting2 from './components/StatefulGreeting2';

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
      <StatefulGreeting2 name="John", greeting="from StatefulGreeting2" />
    </div>
  );
}

export default App;
