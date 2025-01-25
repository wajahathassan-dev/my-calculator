import './App.css';
import { FaBackspace } from "react-icons/fa";
import { useState } from 'react';
import Button from './components/Button';
import History from './components/History';

function App() {

  const [previousCalc, setPreviousCalc] = useState('');
  const [answer, setAnswer] = useState('0');
  const [isCompleted, setIsCompleted] = useState(false);
  const [history, setHistory] = useState([]);

  const handleInput = value => {

    if (isCompleted && isInteger(value)){
      console.log("Check")
      setIsCompleted(false);
      setPreviousCalc('');
      setAnswer(value);
      return
    }

    setIsCompleted(false);

    if (value === '.'){
      
      let numbers = answer.split(/[+\-x/]/);
      if (numbers.length !== 0){
        let lastNum = numbers[numbers.length-1]
        if (lastNum.includes('.')){
          return
        }
      }
    }
    
    if (ifLastArithmeticOrDot(answer) && ifArithmeticOrDot(value)){
      return;
    }

    if (answer === '0'){
      setAnswer(value);
    } else {
      setAnswer(answer+value);
    }
    
  }

  const ifArithmeticOrDot = char => {
    return '+-x/.'.includes(char)
  }

  const ifLastArithmeticOrDot = text => {
    let lastChar = text[text.length-1]
    return ifArithmeticOrDot(lastChar)
  }

  const calculateAnswer = () => {
    let formatted = answer.replace(/x/g, '*');
    let solution = eval(formatted);

    setHistory([...history, `${answer}=${solution}`])

    solution % 1 === 0 ? setAnswer(solution) : setAnswer(solution.toPrecision(3));
    setPreviousCalc(answer);
    setIsCompleted(true);

    
  }

  const isInteger = value => {
    return !isNaN(Number(value))
  }

  const data = [
    {id: 1, content: 'C', handler: () => {setAnswer('0'); setPreviousCalc('')}},
    {id: 2, content: 'CE'},
    {id: 3, content: <FaBackspace/>, handler: () => answer.length === 1 ? setAnswer('0') : setAnswer(answer.slice(0, answer.length-1))},
    {id: 4, content: '/', handler: e => handleInput(e.target.innerHTML)},
 
    {id: 5, content: '7', handler: e => handleInput(e.target.innerHTML)},
    {id: 6, content: '8', handler: e => handleInput(e.target.innerHTML)},
    {id: 7, content: '9', handler: e => handleInput(e.target.innerHTML)},
    {id: 8, content: 'x', handler: e => handleInput(e.target.innerHTML)},
 
    {id: 9, content: '4', handler: e => handleInput(e.target.innerHTML)},
    {id: 10, content: '5', handler: e => handleInput(e.target.innerHTML)},
    {id: 11, content: '6', handler: e => handleInput(e.target.innerHTML)},
    {id: 12, content: '-', handler: e => handleInput(e.target.innerHTML)},
 
    {id: 13, content: '1', handler: e => handleInput(e.target.innerHTML)},
    {id: 14, content: '2', handler: e => handleInput(e.target.innerHTML)},
    {id: 15, content: '3', handler: e => handleInput(e.target.innerHTML)},
    {id: 16, content: '+', handler: e => handleInput(e.target.innerHTML)},
 
    {id: 17, content: '0', cssId: 'container__zero', handler: e => handleInput(e.target.innerHTML)},
    {id: 18, content: '.', handler: e => handleInput(e.target.innerHTML)},
    {id: 19, content: '=', handler: calculateAnswer},
  ]

  return (
  <>
    <div className="container">
      <div className="container__top">
        <p className="container__top__previous">{previousCalc}</p>
        <p className="container__top__answer">{answer}</p>
      </div>
      <div className="container__bottom">

        {data.map(item => {
          return (
            <Button key={item.id} content={item.content} cssId={item.cssId} handler={item.handler}/>
          )
        })}
      </div>
    </div>

    <History history={history}/>
    
  </>
  );
}

export default App;