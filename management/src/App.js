// src/App.js
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui-core/Table';
import TableHead from '@material-ui-core/TableHead';
import TableBody from '@material-ui-core/TableBody';
import TableRow from '@material-ui-core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '엄기기',
  'birthday': '010124',
  'gender': '여자',
  'job': '대학생'
}, 
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '엄니니',
  'birthday': '020224',
  'gender': '여자',
  'job': '대학생'
}, 
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '엄디디',
  'birthday': '030324',
  'gender': '여자',
  'job': '대학생'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
