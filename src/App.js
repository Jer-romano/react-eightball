import './App.css';
import answerList from "./Answers";
import Eightball from './Eightball';

function App() {
  return (
    <div className="App">
     <Eightball answers={answerList}/>
    </div>
  );
}

export default App;
