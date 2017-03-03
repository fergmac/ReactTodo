var $ =require('jquery');

module.exports = {
    setTodos: function (todos) {
        if($.isArray(todos)) {
            //takes two strings so we turn array into string
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        //takes one string
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        // catch fires if error inside of try
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            //return items with todo.completed status of false or if show completed is check show all completed
            return !todo.completed || showCompleted;
        });
        // Filter by searchTest
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
};