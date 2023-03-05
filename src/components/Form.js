import {useReducer} from 'react';
import API from './API';
import { useNavigate } from 'react-router-dom';

export default function Form(){
  const navigate = useNavigate();

  const updateTimes = (opt, times) => times

  const [times, dispatch] = useReducer(updateTimes, '')
  function dateChangeHandler(e){
    const date = new Date(e.target.value);
    dispatch(API.fetchAPI(date));
  }
  function submitHandler(e){
    e.preventDefault();
    const inputs = [...e.target.querySelectorAll('input'), ...e.target.querySelectorAll('select')];

    // validation
    
    if(!inputs[1].value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)){
      alert('Enter a valid phone number, that contains 10 digits, where regional code is optional');
      inputs[1].focus()
      return
    }
    if(new Date(inputs[3].value) < new Date()){
      alert('Enter a valid date. Past dates are not allowed.');
      inputs[3].focus()
      return
    }
    if(inputs[4].value==='Select time'){
      alert('Please select a time. The field is required.');
      inputs[4].focus()
      return
    }
    if(new Date(inputs[4].value).getTime() < new Date().getTime()){
      alert('Select a valid time. Past times are not allowed.')
      inputs[4].focus()
      return
    }

    const obj = ['name', 'phone', 'guests', 'date', 'time', 'occassion'].map((query, index) => [query, inputs[index].value==='Select occassion'?'No occassion':inputs[index].value])
    if(API.submitAPI(obj)){
      localStorage.setItem('LittleLemon', JSON.stringify({book: (localStorage.getItem('LittleLemon')?[...JSON.parse(localStorage.getItem('LittleLemon')).book,obj]:[obj])}))
      navigate('/submitted', {replace:true})
    };
  }
  function focusTarget(e){
    e.preventDefault();
    e.target.nextElementSibling.focus();
  }
  return(
    <section className='form' aria-label='form'>
      <form onSubmit={submitHandler}>
        <header><h1>Reserve a Table</h1></header>
        <label onClick={focusTarget} data-testid='label' labelfor="name">Name :</label>
        <input data-testid='name' id='name' type='text' placeholder='Name, eg. John Doe' required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="phone">Phone No. :</label>
        <input data-testid='phone' id='phone' type='tel' placeholder='Phone no.' required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="guests">Number of Guests :</label>
        <input data-testid='guest' id='guests' type='number' placeholder='Number of guests' required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="date">Date :</label>
        <input data-testid='date' id='date' type='date' onChange={dateChangeHandler} required aria-required />
        <label onClick={focusTarget} data-testid='label' labelfor="time" title='First select date to show up time.'>Time :</label>
        <select data-testid='time' id='time' required aria-required title='First select date to show up time.'>
          <option>Select time</option>
          <Times availTimes = {times} />
        </select>
        <label onClick={focusTarget} data-testid='label' labelfor="occassion">Occassion (optional) :</label>
        <select id='occassion'>
          <option>Select occassion</option>
          <option>Anniversary</option>
          <option>Birthday</option>
        </select>
        <button data-testid='submit' type='submit'>Submit</button>
      </form>
    </section>
  )
}

function Times(props){
  return (
    (props.availTimes)?props.availTimes.map((time,index) => <option key={index}>{time}</option>):''
  )
}