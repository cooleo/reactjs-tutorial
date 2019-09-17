import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from './components/actions';

import Todo from './components/Todo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props

    return (
        <div>
          <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
          <TodoList todos = {visibleTodos}/>
        </div>
    )
  }
}
function select(state) {
  return {
    visibleTodos: state.todos
  }
}
let store = createStore(todoApp)
let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
      <App />
    </Provider>,

    rootElement
)
export default connect(select)(App);