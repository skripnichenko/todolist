import React from 'react';
import { IAddToList } from './../interfaces';

type ListProps = {
    list: IAddToList[],
    onChangeChecked(id: number): void,
    removeTodo(id: number): void
}

const List: React.FC<ListProps> = ({ list, removeTodo, onChangeChecked }) => {
    if (list.length === 0) {
        return <p className='center'>You don't have todos know</p>
    }
    return (<ul>
        {list.map((el) => {
            const completed = ['todo']
            if (el.completed) {
                completed.push('completed')
            }
            return (
                <li className={completed.join(' ')} key={el.id}>
                    <label>
                        <input type='checkbox' checked={el.completed} onChange={() => onChangeChecked(el.id)}/>
                        <span>{el.title}</span>
                        <i className='material-icons red-text' onClick={() => removeTodo(el.id)}>delete</i>

                    </label>
                </li>)
        })
        }
    </ul>
    )
}

export default List
