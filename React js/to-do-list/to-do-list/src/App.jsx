import './App.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ToDoList from './1.TodoList/ToDoList';
import ProtectedRouter from './2.protectedRouter/router/ProtectedRouter';

function App() {

  return (
    <>
     <div>
      <ToDoList/>
      <ProtectedRouter/>
     </div> 
     <ToastContainer />
    </>
  )
}

export default App
