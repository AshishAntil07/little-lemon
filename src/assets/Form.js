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
    const inputs = [...e.target.children].splice(1, 6);

    // validation
    
    if(!inputs[1].value.match(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/)){
      alert('Enter a valid phone number. That matches the pattern 999 99 999 9999.');
      return
    }
    if(new Date(inputs[3].value) < new Date()){
      alert('Enter a valid date. Past dates are not allowed.');
      return
    }

    const obj = ['name', 'phone', 'guests', 'datetime', 'occassion'].map((query, index) => [query, inputs[index].value==='Occassion (optional)'?'No occassion':inputs[index].value])
    if(API.submitAPI(obj)){
      const a = document.createElement('a');
      a.setAttribute('href', '/submitted')
      a.click()
    };
  }
  return(
    <section className='form'>
      <form onSubmit={submitHandler}>
        <header><h1>Reserve a Table</h1></header>
        <input type='text' placeholder='Name, eg. John Doe' required />
        <input type='tel' placeholder='Phone no.' required />
        <input type='number' placeholder='Number of guests' required />
        <input type='date' onChange={dateChangeHandler} required />
        <select>
          <option>Select time</option>
          {times}
        </select>
        <select>
          <option>Occassion (optional)</option>
          <option>Anniversary</option>
          <option>Birthday</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}