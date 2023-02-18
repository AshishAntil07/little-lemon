import {useReducer} from 'react';
import API from './API';

export default function Form(){

  const updateTimes = (opt, times) => times.map((time,index) => <option key={index}>{time}</option>)

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
      return
    }
    if(new Date(inputs[3].value) < new Date()){
      alert('Enter a valid date. Past dates are not allowed.');
      return
    }
    if(inputs[5].value==='Select time'){
      alert('Please select a time. The field is required.');
      return
    }

    const obj = ['name', 'phone', 'guests', 'date', 'time', 'occassion'].map((query, index) => [query, inputs[index].value==='Select occassion'?'No occassion':inputs[index].value])
    if(API.submitAPI(obj)){
      localStorage.setItem('LittleLemon', JSON.stringify({book: (localStorage.getItem('LittleLemon')?[...JSON.parse(localStorage.getItem('LittleLemon')).book,obj]:[obj])}))
      const a = document.createElement('a');
      a.setAttribute('href', '/submitted')
      a.click()
    };
  }
  function focusTarget(e){
    const id = e.target.getAttribute('for');
    document.getElementById(id).dispatchEvent(new Event('click'));
  }
  return(
    <section className='form' aria-label='form'>
      <form onSubmit={submitHandler}>
        <header><h1>Reserve a Table</h1></header>
        <label for="name">Name :</label>
        <input id='name' type='text' placeholder='Name, eg. John Doe' required aria-required />
        <label for="phone">Phone No. :</label>
        <input id='phone' type='tel' placeholder='Phone no.' required aria-required />
        <label for="guests">Number of Guests :</label>
        <input id='guests' type='number' placeholder='Number of guests' required aria-required />
        <label for="date">Date :</label>
        <input id='date' type='date' onChange={dateChangeHandler} required aria-required />
        <label for="time" onClick={focusTarget} title='First select date to show up time.'>Time :</label>
        <select id='time' required aria-required title='First select date to show up time.'>
          <option>Select time</option>
          {times}
        </select>
        <label for="occassion" onClick={focusTarget}>Occassion (optional) :</label>
        <select id='occassion'>
          <option>Select occassion</option>
          <option>Anniversary</option>
          <option>Birthday</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}