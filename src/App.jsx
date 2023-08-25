import React,{useState} from 'react';
import './App.css';
import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import Button from './Components/Button';
import ButtonBox from './Components/ButtonBox';

const btnValues =[
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]
const toLocaleString =(num)=>{
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ")
}
const removeSpaces= (num)=>{num.toString().replace(/\s/g,"")}
const math=(a,b,sign)=>
  sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b
const zeroDivisionError ="cant divide with 0";
const App =()=>{
  let [calc,setCalc]=useState({
    sign:"",
    num:0,
    res:0,
  })

  const numClickHandler =(e)=>{
    e.preventDefault()
    const value = e.target.innerHTML;
    if(removeSpaces(calc.num).length<16){
      setCalc({...calc,num:removeSpaces(calc.num)%1 === 0 && !calc.num.toString().includes(".")
                          ? toLocaleString(Number(removeSpaces(calc.num+value)))
                        :toLocaleString(calc.num+value),res:!calc.sign?0:calc.res,})
    }
  }
  const comaClickHandler=(e)=>{
    e.preventDefault()
    const value = e.target.innerHTML;
    setCalc({...calc,num:!calc.num.toString().includes(".")?calc.num+value:calc.num,})
  }
const signClickHandler=(e)=>{
  setCalc({...calc,sign:e.target.innerHTML,res:!calc.num?calc.res:!calc.res?calc.num:toLocaleString(math(Number(removeSpaces(calc.res)),Number(removeSpaces(calc.num)),calc.sign)),num:0})
}

}


export default App;
