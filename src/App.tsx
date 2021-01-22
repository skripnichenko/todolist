import React, { useEffect, useState } from 'react';
import List from './components/List';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import { IAddToList } from './interfaces';


const App: React.FC = () => {
  const [list, setList] = useState<IAddToList[]>([]);
  const addToList = (title: string) => {
    const newTodo: IAddToList = {
      title,
      id: Date.now(),
      completed: false
    }
    if (newTodo.title.length >= 1) {
      setList(prev => [newTodo, ...prev])
    }
  }
  const onChangeChecked = (id: number) => {
    setList(prev => prev.map(el => {
      if (el.id === id) {
        el.completed = !el.completed
      }
      return el;
    }))
  }
  const removeTodo = (id: number) => {
    setList(prev => prev.filter(el => el.id !== id))
  }

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('list') || '[]') as IAddToList[];
    setList(savedList);
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  return (
    <div>
      <Navbar />
      <div className='container' >
        <TodoForm addToList={addToList} />
        <List onChangeChecked={onChangeChecked} removeTodo={removeTodo} list={list} />
      </div>

    </div>
  );
}

export default App;
