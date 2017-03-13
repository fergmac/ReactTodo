var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
     handleSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;
        
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(todoText));
        } else {
            //puts cursor back in input field automatically so the user can try again
            this.refs.todoText.focus();
        }
    },
    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need todo?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);


