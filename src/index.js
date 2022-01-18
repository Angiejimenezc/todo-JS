
import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

//Si solo tengo un argumento puedo simlificar de ésta manera 
// todoList.todos.forEach( todo => crearTodoHtml(todo));
todoList.todos.forEach( crearTodoHtml);


console.log( 'todos', todoList.todos);



