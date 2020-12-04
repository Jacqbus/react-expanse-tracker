import {v4 as uuidv4} from 'uuid';
import React, {useState, useContext} from 'react'
import {GlobalContext} from './../../context/GlobalState'

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);

  const [ text, setText ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) {
      return alert("Please fill text and amount")
    }

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input id="text" value={text} onChange={e => setText(e.target.value)} type="text" placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount (negative - expanse, positive - income)</label>
          <input id="amount" value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
