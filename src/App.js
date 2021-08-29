import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Clean the livingroom',
        day: '30.08.2021 6:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Driving School 7:45',
        day: '30.08.2021 7:45',
        reminder: true,
    },
    {
        id: 3,
        text: 'Interview',
        day: '30.08.2021 10:00',
        reminder: false,
    }
])
  return (
    <div className="container">
      <Header title="something"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
