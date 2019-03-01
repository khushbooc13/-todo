import React from 'react';
import './style.css';
import ToDo from './Todo.js'
import todoitem from './ToDoItemList.js'

class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      todos:todoitem
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}
  render()
  {
    const tododata= this.state.todos.map(item=><ToDo item={item} 
                                        key={item.id} 
                                        handleChange={this.handleChange}></ToDo>)
    return(
      <div className="todo-list">
          {tododata}
        </div>
    )
  }
  
}

export default App;
