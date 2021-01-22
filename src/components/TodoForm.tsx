import React, { useState } from 'react';

type TodoFormProps = {
    addToList(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({ addToList }) => {
    const [todo, setTodo] = useState<string>('');

    const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    const enterPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setTodo('')
            addToList(todo);
        }
    }

    return (
        <div className='input-field mt2'>
            <input onChange={onChangeTodo} onKeyPress={enterPressHandler} value={todo} placeholder='Enter the title' type='text' id='title' />
            <label htmlFor='title' className='active'>
                Enter the title
            </label>
        </div>
    )
}

export default TodoForm;
