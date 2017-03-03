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
    }
}