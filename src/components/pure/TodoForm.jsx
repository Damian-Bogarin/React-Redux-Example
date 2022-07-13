import React, {useRef} from 'react';
import Proptypes from 'prop-types'

const TodoForm = ({submit}) => {


    const newText = useRef()

    const createTodo = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h2>
                Create your TODO
            </h2>
            <form onSubmit={(e) =>{
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>

            <input type='text' ref={newText} />
            <button type='submit'>
                Create TODO
            </button>
            </form>
        </div>
    );
}

TodoForm.prototype = {
    submit: Proptypes.func.isRequired
}

export default TodoForm;
