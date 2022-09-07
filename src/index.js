import './styles.css';
// import { Todo, TodoList } from './classes';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import {Todo} from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

// const tarea = new Todo('aprender js');

// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);

localStorage.setItem('mi-key','abc');
sessionStorage.setItem('mi-key','abc');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);