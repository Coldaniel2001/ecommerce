
import './App.css';
import { TaskProvider } from './context/TaskContext';
import Router from './Routes/Router';


function App() {
  return (
    <TaskProvider>
      <Router />
    </TaskProvider>
    
  );
}

export default App;
