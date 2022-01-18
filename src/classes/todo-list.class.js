import { Todo } from './todo.class';

export class TodoList {

constructor(){

    // this.todos = [];
    this.cargarLocalStorage();
}



nuevoTodo( todo ) {
    this.todos.push( todo );
    this.guardarLocalStorage();
}

eliminarTodo( id ){
  this.todos = this.todos.filter( todo => todo.id != id )
  this.guardarLocalStorage();
}

marcarComletado( id ){
    for ( const todo of this.todos){
    console.log( id , todo.id);

    if ( todo.id == id ){
         todo.completado = !todo.completado;
         this.guardarLocalStorage();
         break;

    }

}

}

eliminarCompletados(){
    this.todos = this.todos.filter( todo => !todo.completado )
    this.guardarLocalStorage();
}

guardarLocalStorage(){

localStorage.setItem( 'todo', JSON.stringify(this.todos));

}



cargarLocalStorage(){

    this.todos = (localStorage.getItem('todo'))
                    ? JSON.parse (localStorage.getItem('todo'))  //Estos son objetos literales no instancias de mi todo.
                    : [];

                    //El map me permite barrer los elementos y retornar un nuevo arreglo modificado. 
    this.todos = this.todos.map(Todo.fromJson);
  
}
}
