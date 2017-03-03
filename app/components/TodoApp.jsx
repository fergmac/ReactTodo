var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            //return all todos no mater what the text is
            searchText: '',
            //when app starts we get todos
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate: function () {
        //when app updates we set the todos
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
        //using spread we set new todos array equal to old one with new object attached to the end, using uuid node package for radom id's
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function(id) {
        // map over todos and toggle check status then update state of todos
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function ()  {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;