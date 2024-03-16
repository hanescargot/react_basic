import React from 'react';
import {Profile} from './components/Profile';
import {Counter}  from './components/Counter';
import { TodoList } from './components/Todo';

const App = () => {
  return (
    <div className="App">
      <Profile name='xian'  job='house protector'/>
      <Counter/>
      <TodoList/>
    </div>
  );
}

export default App;
