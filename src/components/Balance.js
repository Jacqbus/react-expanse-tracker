import React, {useContext} from 'react'
import {GlobalContext} from './../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const total = transactions.reduce((prevVal, item) => prevVal + item.amount, 0);
  const sing = total >= 0 ? "" : "-";

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sing}${Math.abs(total).toFixed(2)}</h1>
    </>
  )
}
