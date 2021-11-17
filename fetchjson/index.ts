import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}
//interface in ts defines the structure of an object. this Todo interface has 3 properties.
// we can ignore properties of an object and make the properties inside our interface as we want.

axios.get(url).then(response => {
    // console.log(response.data);
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);

});

//in ts the parameter has to be given with their types. otherwise we're going to catch "any type error"

    const logTodo = (id: number, title: string, completed: boolean ) => {
        console.log(`
        The Todo with id: ${id}
        He has a title of: ${title}
        Is it finished? ${completed}
        `);
    };