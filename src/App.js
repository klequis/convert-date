import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
    @value: string such as 23rd
    returns: numbers at beginning of string. E.g., '23'
    If not leading numbers returns ''

    Unicode values for numbers are 48 - 57
    Unicode 48 is 0 (zero), should not be part of a date
      and will be removed if present
*/
const getDayNumber = (value) => {
  
  const len = value.length
  const nums = []
  for (let i=0; i<len; i++) {
    const currentCharacter = value[i]
    const currentCharCode = value.charCodeAt(i)
    // console.log(`${currentCharacter} is unicode ${currentCharCode}`)
    if (currentCharCode >=1 && currentCharCode <=57) {
      nums.push(currentCharacter)
    }
    
  }
  const ret = nums.join('')
  // console.log('joined', ret)
  return ret
}

const getMonthNum = (value) => {
  const monthMMM = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const idx = monthMMM.indexOf(value)
  console.log('idx', idx)
  return idx
}

const getYearNum = (value) => {
  // confirm it is a number and return it
}

class App extends Component {
  state = {
    userDate: 'Jun 29 2018 08:09 AM',
    dbDate: '',
    monthNum: 'none',
    dayNum: 'none',
    yearNum: 'none',
    hourNum: 'none',
    minuteNum: 'none',
  }

  componentDidMount() {
    this.convertDate(this.state.userDate)
  }
  convertDate = (date) => {
    const dParts = date.split(' ')
    console.log(dParts)
    this.setState({
      monthNum: getMonthNum(dParts[0]),
      dayNum: getDayNumber(dParts[1]),
      yearNum: getYearNum(dParts[2]),
    })

  }
  render() {
    
    return (
      <div className="App">
        <ul>
          <li>original date: {this.state.userDate}</li>
          <li>month num: {this.state.monthNum}</li>
          <li>day num: {this.state.dayNum}</li>
          <li>yearn num: {this.state.yearNum}</li>
          <li>hourNum: {this.state.hourNum}</li>
          <li>minute num: {this.state.minuteNum}</li>
          <li>converted date: {this.state.dbDate}</li>
        </ul>
        
      </div>
    );
  }
}

export default App;
