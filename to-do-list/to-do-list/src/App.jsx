import './App.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ToDoList from './1.TodoList/ToDoList';

function App() {

  return (
    <>
     <div>
      <ToDoList/>
     </div> 
     <ToastContainer />
    </>
  )
}

export default App
