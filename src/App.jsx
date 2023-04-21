
import './App.css';
import { TaskProvider } from './context/TaskContext';
import UserAuthProvider from './context/UserAuth/UserAuthProvider';
import { UserProvider } from './context/UserContext';

import Router from './Routes/Router';


function App() {
  return (
    <UserAuthProvider>
      <UserProvider>
        <TaskProvider>
          <Router />
        </TaskProvider>
      </UserProvider>
    </UserAuthProvider>
  );
}

export default App;
