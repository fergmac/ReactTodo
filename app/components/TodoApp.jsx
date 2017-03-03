var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch =  require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            //return all todos no mater what the text is
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },  {
                    id: 2,
                    text: 'clean the yard'
                }, {
                    id: 3,
                    text: 'play guitar'
                }, {
                    id: 4,
                    text: 'practice vocal warmups'
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        alert('new_todo:' + text);
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
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;