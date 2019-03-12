import React, {Component} from 'react';
import './styles.css';

const AddTodo = (props) => {
    let inputRef = '';
    const handleTodo = () => {
        props.onNewTodo(inputRef.value);
        inputRef.value = '';
    }
    return (
        <div>
            <label>
                Nueva Tarea:
                <input type='text' ref={node => inputRef = node}/>
                <button onClick={handleTodo}>Crear</button>
            </label>
        </div>
    );
};

const Todo = (props) => {
    return (
        <li className='Todo'>
            <div>{props.item.task}</div>
        </li>
    );
};

export class Agenda extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    addTodo = (text) => {
        if(!text || text == '') return;
        let todos = this.state.todos.slice();
        todos.push({
            task: text,
            id: Date.now()
        });
        this.setState({todos: todos});
    }

    render() {
        const Todos = this.state.todos.map(
            (todo) => <Todo item={todo} key={todo.id}/>
        );
        return (
            <div className='Agenda'>
                <AddTodo onNewTodo={this.addTodo}/>
                <ul>
                    {Todos}
                </ul>
            </div>
        );
    }

};

export default Agenda;

