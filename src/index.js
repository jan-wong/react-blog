import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mock from 'mockjs'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const mock = Mock.mock({
  'number1|+1': 2,
  'number2|+1': 3,
  'arry1|5': [
    {
      'name|1-5': 'i',
      age: 23
    }
  ],
  first: '@id'
})

console.log(mock)