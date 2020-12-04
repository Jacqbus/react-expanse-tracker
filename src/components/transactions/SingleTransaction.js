import React, {useContext} from 'react'
import {GlobalContext} from './../../context/GlobalState'

export const SingleTransaction = ({ transaction }) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const isIncome = transaction.amount > 0;
  const sign = isIncome ? "+" : "-";

  return (
    <li className={isIncome ? 'plus' : 'minus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount).toFixed(2)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}
