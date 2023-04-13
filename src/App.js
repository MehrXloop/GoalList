import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import GoalList from "./components/GoalList";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
      title: "first goal",
      des: "hellso fjsljfo fjlsjfl eee ",
    },
    {
      title: "first goal",
      des: "hellso fjsljfo fjlsjfl eee ",
    },
    {
      title: "first goal",
      des: "hellso fjsljfo fjlsjfl eee ",
    },
  ]);
  return (
    <div className='App'>
      <Form />
      {
        list.map(element=>{
          return (
            <GoalList title={element.title} des={element.des}/>
          )
        })
      }
      <GoalList title='hello world' des='lfhskhfsfss' />
    </div>
  );
}

export default App;
