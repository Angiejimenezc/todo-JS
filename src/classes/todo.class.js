export class Todo{

static fromJson({id, tarea, completado, creado}) {

    const tempTodo = new Todo(tarea);

    tempTodo.id         = id;
    tempTodo.completado = completado;
    tempTodo.creado     = creado;

    return tempTodo; 

}   
// Esto me permite recuperar los métodos que defini en la clase.

constructor(tarea){

    this.tarea       = tarea;

    this.id          = new Date().getTime();   // 12321321564132
    this.completado  = false;
    this.creado      = new Date();

}
imprimirClase(){
    console.log(`${this.tarea}- ${this.id}`);
}

}